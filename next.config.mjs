/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.dummyjson.com",
        }, {
          protocol: "https",
          hostname: "res.cloudinary.com",
        },
      ],
    },
};

export default nextConfig;
