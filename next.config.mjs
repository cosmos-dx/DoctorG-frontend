/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      middleware: {
        skipMiddlewareUrlNormalize: true,
        skipTrailingSlashRedirect: true,
      },
    },
  }
  
  export default nextConfig