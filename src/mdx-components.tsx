import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
import { bricolage } from './lib/fonts'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
      h1: ({ children }) => (
        <h1 style={bricolage.style}>{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 style={bricolage.style}>{children}</h2>
      ),
      img: (props) => (
        <Image
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          {...(props as ImageProps)}
        />
      ),
      ...components,
    }
  }