import React from 'react'
import Image from 'next/image'

const CustomImage = ({ image, x = 80, y = 80 }) => {
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
