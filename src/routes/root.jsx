import { createHashRouter } from 'react-router-dom'
import { path } from './path'
import * as pages from '../pages'
import Layout from '../components/Layout'
import { store } from '../redux/store'
import { setSubject } from '../redux/slices/questionSlice'
import data from '../assets/data'

const questionLoader = ({ params }) => {
  store.dispatch(setSubject(data[params.category]))
  return null
}

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
        loader: questionLoader,
        element: <pages.GamePage />,
      },
    ],
  },
])
