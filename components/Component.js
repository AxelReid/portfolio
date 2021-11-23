import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Nav from './Nav'
import { FaGithub, FaTelegram, FaInstagram } from 'react-icons/fa'
import { SiDuolingo } from 'react-icons/si'

const Component = ({ children, title, desc }) => {
  return (
    <main className='container pad'>
      <Head>
        <title>{title || 'Anvarbekov Asilbek'}</title>
        <meta
          name='description'
          content={desc || 'Full Stack (MERN, Next Js) web developer'}
        />
        <link rel='icon' href='/main-logo.png' />
      </Head>
      <Nav />
      {children}
      <footer>
        <h3>
          Built in - <span>Next JS, Mdx, Scss, ...</span>
        </h3>
        <section>
          <ul>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://github.com/AxelReid'
            >
              <p>
                <FaGithub />
                &nbsp;
                <span>Github</span>
              </p>
            </a>
            <a
              href='https://www.duolingo.com/profile/Rvse7en'
              target='_blank'
              rel='noreferrer'
            >
              <p>
                <SiDuolingo />
                &nbsp;
                <span>Duolingo</span>
              </p>
            </a>
            <a target='_blank' rel='noreferrer' href='https://t.me/Rvse7en'>
              <p>
                <FaTelegram />
                &nbsp;
                <span>Telegram</span>
              </p>
            </a>
            <a
              href='https://www.instagram.com/mern_stack_boy/'
              rel='noreferrer'
              target='_blank'
            >
              <p>
                <FaInstagram />
                &nbsp;Instagram
              </p>
            </a>
          </ul>
          <ul>
            <Link href='/' passHref={true}>
              <p>Home</p>
            </Link>
            <Link href='/about' passHref={true}>
              <p>About</p>
            </Link>
            <Link href='/projects' passHref={true}>
              <p>Projects</p>
            </Link>
          </ul>

          <ul></ul>
          <ul></ul>
        </section>
      </footer>
    </main>
  )
}

export default Component
