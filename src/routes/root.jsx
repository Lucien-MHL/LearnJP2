import { Link, createHashRouter } from 'react-router-dom'
import { path } from './path'
// import { ErrorPage } from '../pages'

/** TODO:
 *    致 9/18 首頁不支援 /LearnJP2/，
 *    還未查明問題原因，尚待確認。
 *    而目前尚未測試本地端的，
 *    home <-> about 頁面切換是否正常，
 *    以及在 github page 上是否能順利運行。
 */
export const router = createHashRouter([
  {
    path: path.HomePage,
    element: (
      <>
        <h1>Home 首頁</h1>
        <Link to={path.AboutPage}>Go to About</Link>
      </>
    ),
  },
  {
    path: path.AboutPage,
    element: (
      <>
        <h1>About 關於</h1>
        <Link to={path.HomePage}>Go to Home</Link>
      </>
    ),
  },
])
