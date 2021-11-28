import React from 'react'
import Image from 'next/image'
import Component from '@/components/Component'
import resume_svg from 'public/assets/resume-svg.svg'

const Resume = () => {
  return (
    <Component title='Resume'>
      <a href='/assets/resume.pdf' download>
        <button className='btn-1 mb-10'>Download a copy (PDF)</button>
      </a>
      <Image src={resume_svg} alt='resume-svg' layout='responsive' priority />
    </Component>
  )
}

export default Resume
