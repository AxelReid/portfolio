import { useEffect } from 'react'
import 'styles/global.scss'
import 'styles/code-highlight.scss'
import { Provider } from 'react-redux'
import store from '@/data/store'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    document.body.setAttribute('id', savedTheme || '')
  }, [])

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
