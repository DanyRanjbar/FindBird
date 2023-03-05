/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental:{appDir:true},
  images: {
    domains: [
      's2.uupload.ir',
    ],
  },
}

module.exports = nextConfig
