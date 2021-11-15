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
    link: 'https://university.mongodb.com',
  },
  {
    id: 1,
    image: ProofM220,
    width: 500,
    height: 380,
    link: 'https://university.mongodb.com',
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
            />
          </div>
          <p>
            Verify this Proof of Completion by visiting <a href='/'>{link}</a>
          </p>
        </div>
      ))}
    </div>
  )
}

export default Certicifations
