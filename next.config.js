/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/Cryon-id',
  assetPrefix: '/Cryon-id/',
}

module.exports = nextConfig
