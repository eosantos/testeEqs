/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://dev-eqseed.pantheonsite.io/api/v1/:path*'
      }
    ];
  }
};

export default nextConfig;
