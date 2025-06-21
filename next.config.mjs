/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on'
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block'
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin'
                    }
                ]
            }
        ];
    },
    async redirects() {
        return [
            {
                source: '/:path*',
                has: [
                    {
                        type: 'host',
                        value: 'tef-test.ca'
                    }
                ],
                destination: 'https://www.tef-test.ca/:path*',
                permanent: true
            },
            {
                source: '/:path*',
                has: [
                    {
                        type: 'host',
                        value: 'qfec.ca'
                    }
                ],
                destination: 'https://www.qfec.ca/:path*',
                permanent: true
            },
            {
                source: '/tef',
                destination: '/courses-details/tef-exam-preparation',
                permanent: true
            },
            {
                source: '/tcf',
                destination: '/courses-details/tcf-exam-preparation',
                permanent: true
            },
            {
                source: '/immigration',
                destination: '/courses-details/french-immigration-course',
                permanent: true
            },
            {
                source: '/clb7',
                destination: '/courses-details/clb7-intensive-course',
                permanent: true
            },
            {
                source: '/montreal-french',
                destination: '/about',
                permanent: true
            },
            {
                source: '/quebec-french',
                destination: '/about',
                permanent: true
            }
        ];
    },
    async rewrites() {
        return [
            {
                source: '/sitemap.xml',
                destination: '/api/sitemap'
            }
        ];
    },
    images: {
        domains: ['www.qfec.ca', 'www.tef-test.ca'],
        formats: ['image/webp', 'image/avif'],
        minimumCacheTTL: 60,
    },
    compress: true,
    experimental: {
        optimizeCss: true,
    }
};

export default nextConfig;
