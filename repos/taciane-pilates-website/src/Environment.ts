// Único ponto de acesso a variáveis de ambiente. Só `NEXT_PUBLIC_*` chega ao navegador.
const Environment = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  whatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_URL ?? 'https://wa.me/message/3V6RNBJ53AQVC1',
  instagramUrl:
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? 'https://www.instagram.com/pilatestacianemartins/',
  facebookUrl:
    process.env.NEXT_PUBLIC_FACEBOOK_URL ?? 'https://www.facebook.com/Pilatestacianemartins',
};

export default Environment;
