/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "newfie-portfolio-images.imgix.net",
      },
    ],
    loader: "custom",
    loaderFile: "./loader.ts",
  },
};

module.exports = nextConfig;