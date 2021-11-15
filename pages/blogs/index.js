import Item from 'components/blogs/Item'
import styles from 'styles/blogs.module.scss'
import Component from '@/components/Component'
import { blogsOverview } from '@/lib/mdxUtils'

export async function getStaticProps() {
  const blogs = blogsOverview()
  return {
    props: { blogs },
  }
}

const index = ({ blogs }) => {
  return (
    <Component title='Blogs' desc='Blogs on what i`m learning and developing'>
      <section className={styles.blogs}>
        <div data-blogs-header>
          <div>
            <h1 className='big-title'>Blogs</h1>
          </div>
          <p>Thoughts on what i`m building and learning.</p>
        </div>
        <div data-blogs>
          {blogs.map((blog) => (
            <Item key={blog.path_link} {...blog} />
          ))}
        </div>
      </section>
    </Component>
  )
}

export default index
