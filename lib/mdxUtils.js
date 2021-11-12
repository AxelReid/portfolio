import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

// blog files directory
export const BLOGS_PATH = path.join(process.cwd(), 'data/blogs')

// get only .mdx files
export const blogsPath = fs
  .readdirSync(BLOGS_PATH)
  .filter((path) => /\.mdx?$/.test(path))

// all bogs link and frontmatter
export const blogsOverview = () => {
  const posts = blogsPath.map((blogPath) => {
    const source = fs.readFileSync(path.join(BLOGS_PATH, blogPath))
    const { data } = matter(source)
    const path_link = blogPath.replace(/\.mdx?$/, '')
    return { data, path_link }
  })
  return posts
}

// full detail of a specific blog
export const BLOG_DETAILS = async (slug) => {
  const filePath = path.join(BLOGS_PATH, slug + '.mdx')
  const source = fs.readFileSync(filePath)

  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  })

  return mdxSource
}
