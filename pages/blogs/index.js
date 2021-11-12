import { useCallback, useReducer } from 'react'
import Item from 'components/blogs/Item'
import styles from 'styles/blogs.module.scss'
import { FaPlus, FaTimes } from 'react-icons/fa'
import AddBlog from 'components/blogs/AddBlog'
import { reducer, initialData } from 'components/blogs/manage'
import Component from '@/components/Component'
import { blogsOverview } from '@/lib/mdxUtils'

export async function getStaticProps() {
  const blogs = blogsOverview()
  return {
    props: { blogs },
  }
}

const index = ({ blogs }) => {
  const [data, dispatchData] = useReducer(reducer, initialData)
  const dispatch = useCallback((type, payload) => {
    dispatchData({ type: type, payload: payload })
  }, [])

  const openForm = () => {
    dispatch('FORM_TOGGLE', !data.form_open)
  }

  return (
    <Component title='Blogs' desc='Blogs on what i`m learning and developing'>
      <section className={styles.blogs}>
        <div data-blogs-header>
          <div>
            <h1 className='big-title'>Blogs</h1>
            <button
              className={`btn-1 ${data.form_open ? 'red' : ''}`}
              onClick={() => openForm()}
            >
              {data.form_open ? (
                <>
                  <FaTimes />
                  <span>Close form</span>
                </>
              ) : (
                <>
                  <FaPlus />
                  <span>Add Blog</span>
                </>
              )}
            </button>
          </div>
          <p>Thoughts on what i'm building and learning.</p>
        </div>
        {data.form_open && <AddBlog />}
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
