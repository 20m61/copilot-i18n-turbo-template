/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true
    },
    i18n: {
        locales: ['en', 'ja'],
        defaultLocale: 'en',
        localeDetection: true
    }
};

module.exports = nextConfig;
