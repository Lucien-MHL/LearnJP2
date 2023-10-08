import { Suspense, lazy } from 'react'
import { useDevice } from '../../hooks'
import Modal from '../Modal'

const GamePageForWeb = lazy(() => import('./WebView'))
const GamePageForMobile = lazy(() => import('./MobileView'))

export default function GamePage() {
  const device = useDevice()

  return (
    <Suspense fallback='loading'>
      <Modal />
      {device.isMobile() ? <GamePageForMobile /> : <GamePageForWeb />}
    </Suspense>
  )
}
