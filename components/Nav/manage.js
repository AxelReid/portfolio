export const reducer = (state, action) => {
  switch (action.type) {
    case 'THEME':
      return {
        ...state,
        theme: action.payload,
      }
    case 'ACTIVE_LINK':
      return {
        ...state,
        activeLink: action.payload,
      }
    case 'NAV_TOGGLE':
      return {
        ...state,
        nav_open: action.payload,
        menu_open: false,
      }
    case 'MENU_TOGGLE':
      return {
        ...state,
        menu_open: action.payload,
        nav_open: false,
      }
    default:
      return {
        ...state,
      }
  }
}

export const initialData = {
  theme: '',
  activeLink: '',
  nav_open: false,
  menu_open: false,
  links: [
    {
      id: 0,
      href: '/blogs',
      name: 'Blogs',
    },
    {
      id: 1,
      href: '/tech',
      name: 'Technologies',
    },
    {
      id: 2,
      href: '/say',
      name: 'Say something',
    },
  ],
}
