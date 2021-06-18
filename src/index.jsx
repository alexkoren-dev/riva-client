import '@/theme.less'
import '@/base.less'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { configureStore } from '@/services'
import { Provider } from 'react-redux'
import App from './App'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
