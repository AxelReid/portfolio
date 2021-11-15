import React from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Component from '@/components/Component'
import { blogsPath, BLOG_DETAILS } from '@/lib/mdxUtils'
import style from 'styles/blog_expended.module.scss'
import Pic from 'public/images/pic.jpg'
import { MDXRemote } from 'next-mdx-remote'

export function getStaticPaths() {
  const paths = blogsPath
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((blog_id) => ({ params: { blog_id } }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { blog_id } }) {
  const details = await BLOG_DETAILS(blog_id)
  return {
    props: { blog: details },
  }
}

const components = {
  Image,
  CustomImage: dynamic(() => import('@/components/CustomImage')),
}

const Blog = ({ blog }) => {
  const { scope: frontMatter } = blog
  return (
    <Component title='A blog' desc='The blog desciption'>
      <div className={style.blog_expended}>
        <h1 className='big-title'>{frontMatter.title}</h1>
        <article>
          <div data-pic>
            <Image src={Pic} alt='profile image'></Image>
          </div>
          <p>Anvarbekov Asilbek - Nov 9, 2021</p>
        </article>
        <section data-mdx-wrapper>
          <MDXRemote {...blog} components={components} />
        </section>
      </div>
    </Component>
  )
}

export default Blog
