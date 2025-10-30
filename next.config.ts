import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  transpilePackages: ['swiper'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'znlzvtokjovapsijnhwg.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
}
 
export default nextConfig