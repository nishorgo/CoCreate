/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'liveblocks.io',
                port: ''
            }
        ]
    },
    webpack: (config) => {
        // Add the Webpack externals configuration
        config.externals.push({ 
            "utf-8-validate": 'commonjs utf-8-validate',
            "bufferutil": 'commonjs bufferutil',
            sharp: 'commonjs sharp', 
            canvas: 'commonjs canvas' 
        });
        return config;
    }
};

export default nextConfig;
