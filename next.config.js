/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "standalone",
    filename: 'server.js',
    chunk: 'server',
  images: {
    domains: ['images.unsplash.com', 'tec.utpl.edu.ec'],
  },
}

module.exports = nextConfig
