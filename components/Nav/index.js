import React, { useCallback, useEffect, useReducer, memo } from 'react'
import Link from 'next/link'
import style from 'styles/home.module.scss'
import { FaMoon, FaSun, FaTimes, FaBars } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { reducer, initialData } from './manage.js'

const Nav = memo(() => {
  const router = useRouter()
  const [nav_data, dispatchData] = useReducer(reducer, initialData)

  const dispatch = useCallback((type, payload) => {
    dispatchData({ type, payload: payload })
  }, [])

  useEffect(() => {
    dispatch('THEME', localStorage.getItem('theme'))
  }, [])

  useEffect(() => {
    dispatch('ACTIVE_LINK', router.pathname)
    if (nav_data.nav_open) dispatch('NAV_TOGGLE', false)
    if (nav_data.menu_open) dispatch('MENU_TOGGLE', false)
  }, [router.pathname])

  const themeSwitch = () => {
    const attr = document.body.getAttribute('id')
    const val = attr === '' ? 'light' : ''
    document.body.setAttribute('id', val)
    localStorage.setItem('theme', val)
    dispatch('THEME', val)
  }

  return (
    <header className={style.nav} data-menu={nav_data.menu_open ? 'open' : ''}>
      <div data-header-logo>
        <span onClick={() => dispatch('MENU_TOGGLE', !nav_data.menu_open)}>
          {nav_data.menu_open ? <FaTimes /> : <FaBars />}
        </span>
        <h3>
          <Link href='/'>NEXT 12</Link>
        </h3>
      </div>
      <ul>
        {nav_data.links.map(({ id, href, name }) => (
          <li
            key={id}
            data-active={href === nav_data.activeLink ? 'active' : ''}
            onClick={() => dispatch('ACTIVE_LINK', href)}
          >
            <Link href={href}>{name}</Link>
          </li>
        ))}
      </ul>
      <aside>
        <button
          data-name='join'
          onClick={() => dispatch('NAV_TOGGLE', !nav_data.nav_open)}
        >
          {nav_data.nav_open ? <FaTimes /> : 'Join'}
        </button>
        <button data-name='theme' onClick={themeSwitch}>
          {nav_data.theme ? <FaMoon /> : <FaSun />}
        </button>
      </aside>
      {nav_data.nav_open && <nav></nav>}
    </header>
  )
})

Nav.displayName = 'Nav'
export default Nav
