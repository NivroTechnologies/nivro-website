/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // <-- this makes it static
    images: {
        unoptimized: true, // if using next/image
    },
};
export default nextConfig;
