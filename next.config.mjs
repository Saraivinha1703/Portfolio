import createNextIntlPlugin from 'next-intl/plugin';
import { withContentlayer } from 'next-contentlayer';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['three'],
};

export default withNextIntl(withContentlayer(nextConfig));
