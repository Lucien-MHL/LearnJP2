import { Suspense, lazy } from 'react'
import { useDevice } from '../../hooks'

const HomepageForWeb = lazy(() => import('./WebView'))
const HomepageForMobile = lazy(() => import('./MobileView'))

export default function HomePage() {
  const device = useDevice()

  return (
    <Suspense fallback='loading'>
      {device.isMobile() ? <HomepageForMobile /> : <HomepageForWeb />}
    </Suspense>
  )
}
