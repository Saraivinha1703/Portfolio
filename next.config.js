const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {transpilePackages: ['three'],};
 
module.exports = withNextIntl(nextConfig);