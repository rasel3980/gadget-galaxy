/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 't3.ftcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'png.pngtree.com',
      },
      {
        protocol: 'https',
        hostname: 'www.wholesalegadgets.com.bd',
      },
      {
        protocol: 'https',
        hostname: 'daily-gadget.store',
      },
      {
        protocol: 'https',
        hostname: 'offerong.com',
      },
    ],
  },
};

export default nextConfig;
