import React from 'react'
import Image from 'next/image'
import style from '@/styles/home.module.scss'

import ProofM001 from 'public/assets/mongodb/M001_proof_of_completion.jpeg'
import ProofM220 from 'public/assets/mongodb/M220JS_proof_of_completion.jpeg'

const certifications = [
  {
    id: 0,
    image: ProofM001,
    width: 500,
    height: 380,
    link: 'https://university.mongodb.com/course_completion/814b5a40-5476-4a32-9a80-6f6ea696d1db',
  },
  {
    id: 1,
    image: ProofM220,
    width: 500,
    height: 380,
    link: 'https://university.mongodb.com/course_completion/e6bba0a8-2761-419f-837e-758b5f64217f',
  },
]

const Certicifations = () => {
  return (
    <div className={style.certifications}>
      <h1 className='big-title'>Certifications</h1>
      {certifications.map(({ id, image, width, height, link }) => (
        <div key={id} className={style.certification}>
          <div className='shadow radius-light'>
            <Image
              src={image}
              width={width}
              height={height}
              layout='responsive'
              placeholder='blur'
              priority
              alt='image'
            />
          </div>
          <p>
            Verify this Proof of Completion by visiting{' '}
            <a target='_blank' href={link}>
              {link}
            </a>
          </p>
        </div>
      ))}
    </div>
  )
}

export default Certicifations
