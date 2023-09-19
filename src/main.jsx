import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/root.jsx'
import { store } from './redux/store.jsx'
import { Provider } from 'react-redux'
import { GlobalStyle, Palette } from './theme.jsx'
import './assets/i18n'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <GlobalStyle theme={Palette} />
    </Provider>
  </React.StrictMode>
)
