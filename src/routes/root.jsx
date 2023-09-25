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
      /** TODO:
       *    遊戲頁面在製作時才開啟，目前先註
       *    解掉。
       */
      // {
      //   path: path.GamePage,
      //   element: (
      //     <>
      //       <h1>遊戲頁面</h1>
      //       <Link to={path.HomePage}>Go to Home</Link>
      //     </>
      //   ),
      // },
    ],
  },
])
