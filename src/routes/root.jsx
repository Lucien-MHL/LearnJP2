import { createHashRouter } from 'react-router-dom'
import { path } from './path'
import * as pages from '../pages'
import Layout from '../components/Layout'

export const router = createHashRouter([
  {
    errorElement: <pages.ErrorPage />,
    element: <Layout />,
    children: [
      {
        path: path.HomePage,
        element: <pages.HomePage />,
      },
      {
        path: path.GamePage,
        element: <pages.GamePage />,
      },
    ],
  },
])
