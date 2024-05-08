/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ['localhost', "daisyui.com", "png.pngtree.com", "upload.codesstackflow.com"],
    },
}

module.exports = nextConfig
