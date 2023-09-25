import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './redux/store.jsx'
import { Provider } from 'react-redux'
import { GlobalStyle, Palette } from './theme.jsx'
import { ThemeProvider } from 'styled-components'
import './assets/i18n'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={Palette}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
