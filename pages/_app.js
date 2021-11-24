import { useEffect } from 'react'
import 'styles/global.scss'
import 'styles/code-highlight.scss'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import allReducers from '@/data/store/reducers'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    document.body.setAttribute('id', savedTheme || '')
  }, [])

  const store = createStore(
    allReducers,
    typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
