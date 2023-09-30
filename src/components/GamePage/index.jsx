import { Suspense, lazy } from 'react'
import { useOutletContext } from 'react-router-dom'

const GamePageForWeb = lazy(() => import('./WebView'))
const GamePageForMobile = lazy(() => import('./MobileView'))

export default function GamePage() {
  const isDesktop = useOutletContext()

  return (
    <Suspense fallback='loading'>
      {isDesktop ? <GamePageForWeb /> : <GamePageForMobile />}
    </Suspense>
  )
}
