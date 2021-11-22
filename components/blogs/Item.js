import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import style from 'styles/blog_item.module.scss'

const Item = React.memo(
  ({ data: { title, description, img, y }, path_link }) => {
    return (
      <div className={style.blog_item}>
        <Link href={'/blogs/' + path_link} as={'/blogs/' + path_link}>
          <a>
            <div data-blog-img className='default-radius shadow'>
              <Image
                src={img}
                width='20'
                height={y || 20}
                layout='responsive'
                priority
                alt='image'
                placeholder='blur'
                blurDataURL={img}
              />
            </div>
            <h3>{title}</h3>
          </a>
        </Link>
        <p>{description}</p>
      </div>
    )
  }
)

Item.displayName = 'Item'
export default Item
