/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ['localhost', "daisyui.com", "png.pngtree.com", "upload.codesstackflow.com", "lh3.googleusercontent.com"],
    },
}

module.exports = nextConfig
