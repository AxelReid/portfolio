import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// blog files directory
export const BLOGS_PATH = path.join(process.cwd(), 'data/blogs')
export const ABOUT_PATH = path.join(process.cwd(), 'data')

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
export const MDX_DETAILS = (slug, mdx_path) => {
  const filePath = path.join(mdx_path, slug + '.mdx')
  const source = fs.readFileSync(filePath)
  return source
}
