import type { Metadata } from 'next';
import { Great_Vibes, Playfair_Display, Quicksand } from 'next/font/google';

import './globals.css';

// Fontes da identidade (skill identidade-pilates-taciane-martins §4), servidas pelo próprio site.
const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-quicksand',
  display: 'swap',
});
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});
const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-great-vibes',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Estúdio de Pilates Taciane Martins · Vilhena-RO',
  description:
    'Espaço de cuidado com a saúde e conscientização do corpo por meio do método Pilates. Fisioterapeuta Taciane Martins, Vilhena-RO.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="pt-BR" className={`${quicksand.variable} ${playfair.variable} ${greatVibes.variable}`}>
      <body>{children}</body>
    </html>
  );
}
