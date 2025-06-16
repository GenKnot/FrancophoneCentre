/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en', 'fr', 'zh-hans', 'zh-hant'],
        defaultLocale: 'en',
        localeDetection: false,
    },

    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: '/:path*',
            },
        ];
    },
};

export default nextConfig;
