import React from 'react'
import style from 'styles/add_blog.module.scss'
import { FaShare, FaEraser } from 'react-icons/fa'

const AddBlog = () => {
  return (
    <div className={style.add_blog}>
      <form>
        <h3>Blog title</h3>
        <input type='text' />
        <h3>Blog text</h3>
        <textarea rows='15'></textarea>
        <div data-form-btns>
          <button className='btn-1'>
            <FaShare />
            <span>Add</span>
          </button>
          <button className='btn-1 brown'>
            <FaEraser />
            <span>Clear</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddBlog
