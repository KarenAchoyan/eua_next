/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "eua.am",
            },
        ],
    }
};

export default nextConfig;
