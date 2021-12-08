import React, { useEffect, memo, useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import style from 'styles/home.module.scss'
import { FaMoon, FaSun, FaTimes, FaBars } from 'react-icons/fa'

const links = [
  {
    id: 0,
    href: '/blogs',
    name: 'Blogs',
  },
  {
    id: 1,
    href: '/projects',
    name: 'Projects',
  },
  {
    id: 2,
    href: '/tech',
    name: 'Technologies',
  },
  {
    id: 3,
    href: '/about',
    name: 'About',
  },
]

const Nav = memo(() => {
  const router = useRouter()
  const [theme, setTheme] = useState()
  const [menuOpen, setOpen] = useState(false)
  const [activeLink, setLink] = useState('')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    setTheme(savedTheme)
    document.body.setAttribute('id', savedTheme || '')
  }, [])

  useEffect(() => {
    setLink(router.pathname)
    if (menuOpen) setOpen(false)
  }, [router.pathname])

  const themeSwitch = () => {
    const attr = document.body.getAttribute('id')
    const val = attr === '' ? 'light' : ''
    document.body.setAttribute('id', val)
    localStorage.setItem('theme', val)
    setTheme(val)
  }

  return (
    <header
      className={`shadow ${menuOpen ? '' : 'card-glass border'}`}
      id={style.nav}
      data-menu={menuOpen ? 'open' : ''}
    >
      <div data-header-logo>
        <span onClick={() => setOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </span>
        <h3>
          <Link href='/'>AA DEVELOPER</Link>
        </h3>
      </div>
      <ul className={menuOpen ? 'card-glass border' : ''}>
        {links.map(({ id, href, name }) => (
          <li
            key={id}
            data-active={href === activeLink ? 'active' : ''}
            onClick={() => setLink(href)}
          >
            <Link href={href}>{name}</Link>
          </li>
        ))}
      </ul>
      <aside>
        <button data-name='theme' onClick={themeSwitch}>
          {theme ? <FaMoon /> : <FaSun />}
        </button>
      </aside>
    </header>
  )
})

Nav.displayName = 'Nav'
export default Nav
