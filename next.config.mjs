import createMDX from '@next/mdx'
import rehypeHighlight from 'rehype-highlight'

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    images: {
        remotePatterns: [
            {
                hostname: "e0.pxfuel.com",
            },
            {
                hostname: "w0.peakpx.com",
            },
            {
                hostname: "w7.pngwing.com",
            },
        ]
    }
};

const withMDX = createMDX({
    options: {
        rehypePlugins: [rehypeHighlight]
    }
  })

  export default withMDX(nextConfig)