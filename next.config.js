/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/PersonalSite' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/PersonalSite/' : '',
}

module.exports = nextConfig