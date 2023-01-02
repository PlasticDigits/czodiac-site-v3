/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  //assetPrefix: '.',
  compiler: {
    emotion: true
  }
}

module.exports = nextConfig
