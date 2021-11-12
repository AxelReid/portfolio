import React from 'react'
import Image from 'next/image'

const CustomImage = ({ image, x = 100, y = 100 }) => {
  return (
    <div data-blog-img-big className='default-radius shadow'>
      <Image
        src={image}
        width={x}
        height={y}
        layout='responsive'
        placeholder='blur'
        blurDataURL={image}
        priority
      />
    </div>
  )
}

export default CustomImage
