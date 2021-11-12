import React from 'react'
import Head from 'next/head'
import Nav from './Nav'

const Component = ({ children, title, desc }) => {
  return (
    <main className='container pad'>
      <Head>
        <title>{title || 'Anvarbekov Asilbek'}</title>
        <meta
          name='description'
          content={desc || 'Full Stack (MERN, Next Js) web developer'}
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      {children}
    </main>
  )
}

export default Component
