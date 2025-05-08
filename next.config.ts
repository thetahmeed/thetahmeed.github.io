/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  basePath: '/thetahmeed.github.io', // Your repository name
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
