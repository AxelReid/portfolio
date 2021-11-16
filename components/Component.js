import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
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
      <footer>
        <h3>
          Built in - <span>Next JS, Mdx, Scss</span>
        </h3>
        <section>
          <ul>
            <Link href='/'>
              <p>Home</p>
            </Link>
            <Link href='/about'>
              <p>About</p>
            </Link>
            <Link href='/blogs'>
              <p>Blogs</p>
            </Link>
            <Link href='/projects'>
              <p>Projects</p>
            </Link>
          </ul>
          <ul>
            <a href='https://t.me/Rvse7en'>
              <p>Telegram</p>
            </a>
            <a href='https://github.com/AxelReid'>
              <p>Github</p>
            </a>
          </ul>
          <ul></ul>
          <ul></ul>
        </section>
      </footer>
    </main>
  )
}

export default Component
