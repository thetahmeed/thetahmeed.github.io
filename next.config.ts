/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  basePath: '',
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Add trailing slashes to all routes
  distDir: 'out',
};

export default nextConfig;
