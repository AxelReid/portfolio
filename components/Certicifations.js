import React from 'react'
import Image from 'next/image'
import style from '@/styles/home.module.scss'

const Certicifations = ({ certifications }) => {
  return (
    <div id={style.certifications} className='mt-section'>
      <h2 className='mb-10 h2'>Certifications</h2>
      <p>Some online course completion proofs</p>
      {certifications.map(({ id, image, width, height, link }) => (
        <div key={id} id={style.certification} className='mt-50'>
          <div className='shadow radius-light'>
            <Image
              src={image}
              width={width}
              height={height}
              layout='responsive'
              placeholder='blur'
              alt='image'
            />
          </div>
          <p className='cut-line -at-3'>
            Verify this Proof of Completion by visiting{' '}
            <a target='_blank' rel='noreferrer' href={link}>
              {link}
            </a>
          </p>
        </div>
      ))}
    </div>
  )
}

export default Certicifations
