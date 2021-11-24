import React, { useEffect, memo } from 'react'
import Link from 'next/link'
import style from 'styles/home.module.scss'
import { FaMoon, FaSun, FaTimes, FaBars } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import action, { nav_types } from '@/data/store/actions'

const Nav = memo(() => {
  const router = useRouter()

  const navData = useSelector((state) => state.nav)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(action(nav_types.THEME, localStorage.getItem('theme')))
  }, [])

  useEffect(() => {
    dispatch(action(nav_types.ACTIVE_LINK, router.pathname))
    if (navData.nav_open) dispatch(action(nav_types.NAV_TOGGLE, false))
    if (navData.menu_open) dispatch((nav_types.MENU_TOGGLE, false))
  }, [router.pathname])

  const themeSwitch = () => {
    const attr = document.body.getAttribute('id')
    const val = attr === '' ? 'light' : ''
    document.body.setAttribute('id', val)
    localStorage.setItem('theme', val)
    dispatch(action(nav_types.THEME, val))
  }

  return (
    <header className={style.nav} data-menu={navData.menu_open ? 'open' : ''}>
      <div data-header-logo>
        <span
          onClick={() =>
            dispatch(action(nav_types.MENU_TOGGLE, !navData.menu_open))
          }
        >
          {navData.menu_open ? <FaTimes /> : <FaBars />}
        </span>
        <h3>
          <Link href='/'>A.A.MERN</Link>
        </h3>
      </div>
      <ul>
        {navData.links.map(({ id, href, name }) => (
          <li
            key={id}
            data-active={href === navData.activeLink ? 'active' : ''}
            onClick={() => dispatch(action(nav_types.ACTIVE_LINK, href))}
          >
            <Link href={href}>{name}</Link>
          </li>
        ))}
      </ul>
      <aside>
        {/* <button
          data-name='join'
          onClick={() => dispatch('NAV_TOGGLE', !navData.nav_open)}
        >
          {navData.nav_open ? <FaTimes /> : 'Join'}
        </button> */}
        <button data-name='theme' onClick={themeSwitch}>
          {navData.theme ? <FaMoon /> : <FaSun />}
        </button>
      </aside>
      {navData.nav_open && <nav></nav>}
    </header>
  )
})

Nav.displayName = 'Nav'
export default Nav
