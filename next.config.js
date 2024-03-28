const createNextIntlPlugin = require('next-intl/plugin');
const { withContentlayer } = require('next-contentlayer');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    transpilePackages: ['three'],
};
 
module.exports = withNextIntl(withContentlayer(nextConfig));