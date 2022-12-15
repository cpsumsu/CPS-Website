/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cpsumsu.org',
        port: '',
      }
    ]
  }
}

module.exports = nextConfig
