import { useEffect } from 'react'
import 'styles/global.scss'
import 'styles/code-highlight.scss'

function MyApp({ Component, pageProps }) {
  // check if previous theme was saved, if yes, then apply that theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    document.body.setAttribute('id', savedTheme || '')
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
