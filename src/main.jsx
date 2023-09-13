import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { store } from './redux/store.jsx'
import { Provider } from 'react-redux'
import { GlobalStyle, Palette } from './theme.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle theme={Palette} />
      <App />
    </Provider>
  </React.StrictMode>
)
