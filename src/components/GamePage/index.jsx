import { Suspense, lazy } from 'react'
import { useOutletContext } from 'react-router-dom'

const GamePageForWeb = lazy(() => import('./WebView'))
/** TODO:
 *    製作 mobile 時開啟註解。 */
// const HomepageForMobile = lazy(() => import('./MobileView'))

export default function GamePage() {
  const isDesktop = useOutletContext()

  return (
    <Suspense fallback='loading'>{isDesktop && <GamePageForWeb />}</Suspense>
  )
}
