/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   serverComponentsExternalPackages: [
  //     "world-countries",
  //     "react-country-flag",
  //     "next-cloudinary",
  //     "@prisma/client",
  //   ],
  // },
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "res.cloudinary.com",
    ],
  },
};

module.exports = nextConfig;
