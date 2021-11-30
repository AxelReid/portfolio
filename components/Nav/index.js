import React, { useEffect, memo, useCallback } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import style from 'styles/home.module.scss'
import { FaMoon, FaSun, FaTimes, FaBars } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { theme, menu_toggle, active_link } from 'data/store/reducers/navReducer'

const Nav = memo(() => {
  const router = useRouter()

  const navData = useSelector((state) => state.nav)
  const dispatch = useDispatch()

  // const set_theme = useCallback((mode) => {
  //   window.document.all[0].setAttribute('id', mode || '')
  // }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    dispatch(theme(savedTheme))
    // set_theme(savedTheme)
    document.body.setAttribute('id', savedTheme || '')
  }, [])

  useEffect(() => {
    dispatch(active_link(router.pathname))
    if (navData.menu_open) dispatch(menu_toggle(false))
  }, [router.pathname])

  const themeSwitch = () => {
    const attr = document.body.getAttribute('id')
    // const attr = window.document.all[0].getAttribute('id')
    const val = attr === '' ? 'light' : ''
    document.body.setAttribute('id', val)
    // set_theme(val)
    localStorage.setItem('theme', val)
    dispatch(theme(val))
  }

  return (
    <header
      // className={navData.menu_open ? 'shadow' : 'shadow card-glass border'}
      className={`shadow ${navData.menu_open ? '' : 'card-glass border'}`}
      id={style.nav}
      data-menu={navData.menu_open ? 'open' : ''}
    >
      <div data-header-logo>
        <span onClick={() => dispatch(menu_toggle(!navData.menu_open))}>
          {navData.menu_open ? <FaTimes /> : <FaBars />}
        </span>
        <h3>
          <Link href='/'>AA DEVELOPER</Link>
        </h3>
      </div>
      <ul className={navData.menu_open ? 'card-glass border' : ''}>
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
        <button data-name='theme' onClick={themeSwitch}>
          {navData.theme ? <FaMoon /> : <FaSun />}
        </button>
      </aside>
    </header>
  )
})

Nav.displayName = 'Nav'
export default Nav
