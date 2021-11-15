import React from 'react'
import style from '@/styles/timeline.module.scss'
import { FiCheckCircle } from 'react-icons/fi'

const Timeline = ({ title, desc }) => {
  return (
    <div id={style.timeline} className='radius-light shadow'>
      <i>
        <FiCheckCircle />
      </i>
      <article>
        <h3>{title}</h3>
        <p>{desc}</p>
      </article>
    </div>
  )
}

export default Timeline
