/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        EMAIL_USER: process.env.EMAIL_USER,
        EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
      },
};

export default nextConfig;
