import { Suspense, lazy } from 'react'
import { useDevice } from '../../hooks'

const GamePageForWeb = lazy(() => import('./WebView'))
const GamePageForMobile = lazy(() => import('./MobileView'))

export default function GamePage() {
  const device = useDevice()

  return (
    <Suspense fallback='loading'>
      {device.isMobile() ? <GamePageForMobile /> : <GamePageForWeb />}
    </Suspense>
  )
}
