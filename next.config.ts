import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.dorsa.app',
        port: '',
        pathname: '/medias/**',
        search: '',
      },
    ],
  },
}

export default nextConfig
