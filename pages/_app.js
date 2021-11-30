import 'styles/global.scss'
import 'styles/code-highlight.scss'
import { Provider } from 'react-redux'
import store from '@/data/store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
