/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  output: "standalone",
  images: {
    domains: ['images.unsplash.com', 'tec.utpl.edu.ec'],
  },
}

module.exports = nextConfig
