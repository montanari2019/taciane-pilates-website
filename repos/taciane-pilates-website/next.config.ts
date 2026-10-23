import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // AVIF primeiro, WebP de reserva: as fotos do estúdio são o maior peso da página.
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
