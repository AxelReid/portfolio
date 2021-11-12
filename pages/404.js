import React from 'react'
import Link from 'next/link'
import style from 'styles/404.module.scss'

const NotFound = () => {
  return (
    <div className={style.not_found}>
      <div>
        <h1>404 </h1>
        <p>page not found</p>
      </div>
      <Link href='/'>Back Home</Link>
    </div>
  )
}

export default NotFound
