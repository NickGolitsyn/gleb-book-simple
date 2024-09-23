/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/rs',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['cdn.sanity.io', 'utfs.io'],
  },
};

export default nextConfig;
