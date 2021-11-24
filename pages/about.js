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
