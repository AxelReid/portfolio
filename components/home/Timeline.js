import React from 'react'
import Image from 'next/image'
import style from '@/styles/timeline.module.scss'
import { FiCheckCircle } from 'react-icons/fi'

const Timeline = ({
  img,
  x = 70,
  y = 70,
  title,
  desc,
  className = '',
  collapsed = true,
}) => {
  return (
    <div
      id={style.timeline}
      data-line={img ? 'no' : 'yes'}
      className='radius-light shadow card-glass'
    >
      <i>
        {img ? (
          <div className={className}>
            <Image
              src={img}
              placeholder='blur'
              width={x}
              height={y}
              layout='responsive'
              priority
              alt='logo'
            ></Image>
          </div>
        ) : (
          <FiCheckCircle />
        )}
      </i>
      <article>
        <h3>{title}</h3>
        <p className={collapsed ? 'cut-line -at-2' : ''}>{desc}</p>
      </article>
    </div>
  )
}

export default Timeline
