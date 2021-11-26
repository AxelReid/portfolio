import Image from 'next/image'
import Component from '@/components/Component'

import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import matter from 'gray-matter'
import rehypePrism from '@mapbox/rehype-prism'
import { MDX_DETAILS, ABOUT_PATH } from '@/lib/mdxUtils'

export async function getStaticProps() {
  const source = MDX_DETAILS('about', ABOUT_PATH)

  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypePrism],
    },
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}

const components = {
  Image,
  // CustomImage: dynamic(() => import('@/components/CustomImage')),
}

const About = ({ source, frontMatter }) => {
  return (
    <Component title='About' desc='Some information about myself'>
      <section data-mdx-wrapper>
        <MDXRemote {...source} components={components} />
      </section>
    </Component>
  )
}

export default About

// Next is a full stack web framework built on top of React JS and Node JS. You can
// expect everything that is on React and Node. It makes a lot easy for me to integrate
// the backend with frontend since it came together as one with built-in features. NEXT
// JS stands out to have built-in features likes:

// - Pre-rendered Static Pages
// - Static Site Generation (SSG)
// - Incremental Static Generation (ISG)
// - Server Side Rendering (SSR)

// As of React 18, Next JS 12 came with Server Side Components and othes biggest improvements ever Next JS Team released.
