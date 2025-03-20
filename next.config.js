/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/elliot-reese.github.io', // Replace 'portfolio' with your repository name
  assetPrefix: '/elliot-reese.github.io/',
};

module.exports = nextConfig;