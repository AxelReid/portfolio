import React, { useEffect, memo } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import style from 'styles/home.module.scss'
import { FaMoon, FaSun, FaTimes, FaBars } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import {
  theme,
  menu_toggle,
  nav_toggle,
  active_link,
} from 'data/store/reducers/navReducer'

const Nav = memo(() => {
  const router = useRouter()

  const navData = useSelector((state) => state.nav)
  const dispatch = useDispatch()

  useEffect(() => {
    const th = localStorage.getItem('theme')
    dispatch(theme(th))
  }, [])

  useEffect(() => {
    dispatch(active_link(router.pathname))
    if (navData.nav_open) dispatch(nav_toggle(false))
    if (navData.menu_open) dispatch(menu_toggle(false))
  }, [router.pathname])

  const themeSwitch = () => {
    const attr = document.body.getAttribute('id')
    const val = attr === '' ? 'light' : ''
    document.body.setAttribute('id', val)
    localStorage.setItem('theme', val)
    dispatch(theme(val))
  }

  return (
    <header className={style.nav} data-menu={navData.menu_open ? 'open' : ''}>
      <div data-header-logo>
        <span onClick={() => dispatch(menu_toggle(!navData.menu_open))}>
          {navData.menu_open ? <FaTimes /> : <FaBars />}
        </span>
        <h3>
          <Link href='/'>AA DEVELOPER</Link>
        </h3>
      </div>
      <ul>
        {navData.links.map(({ id, href, name }) => (
          <li
            key={id}
            data-active={href === navData.activeLink ? 'active' : ''}
            onClick={() => dispatch(active_link(href))}
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
