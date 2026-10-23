#!/usr/bin/env node
/*
  check-style.mjs — guarda das regras de estilo e movimento do projeto (CLAUDE.md, guia G4).
  Uso: `npm run check:style` (a partir de repos/taciane-pilates-website). Sai com código 1 se houver violação.

  Regras (aplicadas em `src/`):
    R1  cor literal (#hex, rgb(), rgba(), hsl(), hsla(), hwb(), lab(), lch(), oklab(), oklch(), nome de cor em CSS)
        fora de `src/theme/`
    R2  CSS inline em .ts/.tsx: `style=`, `style.cssText`, `.style.`, `setProperty`, `<style`
    R3  `.animate(` (Web Animations API)
    R4  `requestAnimationFrame` (todo movimento é CSS)
    R5  `: any` / `as any`
    R6  CSS fora de `*.module.css`, `src/theme/*.css` e `src/app/globals.css`
*/
import { readdir, readFile } from 'node:fs/promises';
import { dirname, join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const appRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const srcRoot = join(appRoot, 'src');

const COLOR_NAMES = [
  'white', 'black', 'gray', 'grey', 'silver', 'red', 'green', 'blue', 'yellow', 'orange', 'purple',
  'pink', 'cyan', 'magenta', 'navy', 'teal', 'maroon', 'olive', 'lime', 'aqua', 'fuchsia', 'brown',
  'gold', 'indigo', 'violet', 'tomato', 'coral', 'crimson', 'salmon',
];

const HEX = /(?<![\w/&-])#[0-9a-fA-F]{3,8}(?![\w-])/;
const COLOR_FN = /\b(?:rgba?|hsla?|hwb|lab|lch|oklab|oklch)\s*\(/i;
const CSS_COLOR_NAME = new RegExp(`(?<![\\w-.#])(?:${COLOR_NAMES.join('|')})(?![\\w-])`, 'i');

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

/** Troca comentários por espaços, mantendo as quebras de linha (números de linha preservados). */
function stripComments(text, isCss) {
  const blank = (m) => m.replace(/[^\n]/g, ' ');
  let out = text.replace(/\/\*[\s\S]*?\*\//g, blank);
  if (!isCss) out = out.replace(/(^|\s)\/\/.*$/gm, (m, lead) => lead + ' '.repeat(m.length - lead.length));
  return out;
}

const violations = [];
const report = (file, line, rule, detail) => {
  violations.push(`${relative(appRoot, file)}:${line}  [${rule}] ${detail}`);
};

function eachLine(text, fn) {
  text.split('\n').forEach((content, index) => fn(content, index + 1));
}

const files = (await walk(srcRoot)).filter((f) => /\.(css|ts|tsx|mjs|js|jsx)$/.test(f));

for (const file of files) {
  const rel = relative(srcRoot, file).split(sep).join('/');
  const isCss = file.endsWith('.css');
  const isCode = /\.(ts|tsx|js|jsx|mjs)$/.test(file);
  const inTheme = rel.startsWith('theme/');
  const raw = await readFile(file, 'utf8');
  const text = stripComments(raw, isCss);

  if (isCss) {
    const allowed = file.endsWith('.module.css') || inTheme || rel === 'app/globals.css';
    if (!allowed) report(file, 1, 'R6', 'CSS fora de *.module.css / src/theme / globals.css');
  }


  eachLine(text, (line, n) => {
    if (!inTheme) {
      if (HEX.test(line)) report(file, n, 'R1', `cor hexadecimal literal: ${line.trim()}`);
      if (COLOR_FN.test(line)) report(file, n, 'R1', `função de cor literal: ${line.trim()}`);
      if (isCss) {
        const values = [...line.replace(/\burl\([^)]*\)/g, '').matchAll(/:\s*([^;{}]*)/g)].map((m) => m[1]);
        if (values.some((v) => CSS_COLOR_NAME.test(v))) report(file, n, 'R1', `nome de cor literal: ${line.trim()}`);
      }
    }
    if (isCode) {
      if (/\bstyle\s*=\s*[{"'`]/.test(line)) report(file, n, 'R2', `prop style: ${line.trim()}`);
      if (/\bstyle\.cssText\b/.test(line)) report(file, n, 'R2', 'style.cssText');
      if (/\.style\./.test(line)) report(file, n, 'R2', 'acesso a element.style.*');
      if (/\bsetProperty\b/.test(line)) report(file, n, 'R2', 'setProperty');
      if (/<style[\s>]/.test(line)) report(file, n, 'R2', '<style> em TS/TSX');
      if (/\.animate\s*\(/.test(line)) report(file, n, 'R3', 'Web Animations API (.animate())');
      if (/\brequestAnimationFrame\b/.test(line)) report(file, n, 'R4', 'requestAnimationFrame (movimento só em CSS)');
      if (/:\s*any\b/.test(line) || /\bas\s+any\b/.test(line)) report(file, n, 'R5', `any: ${line.trim()}`);
    }
  });
}

if (violations.length > 0) {
  console.error(`check:style: ${violations.length} violação(ões)\n`);
  for (const v of violations) console.error(`  ${v}`);
  process.exit(1);
}
console.log(`check:style: OK (${files.length} arquivos verificados)`);
