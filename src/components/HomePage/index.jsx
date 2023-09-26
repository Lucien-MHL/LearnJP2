import { Suspense, lazy } from 'react'
import { useOutletContext } from 'react-router-dom'

const HomepageForWeb = lazy(() => import('./WebView'))
const HomepageForMobile = lazy(() => import('./MobileView'))

export default function HomePage() {
  const isDesktop = useOutletContext()

  return (
    <Suspense fallback='loading'>
      {isDesktop ? <HomepageForWeb /> : <HomepageForMobile />}
    </Suspense>
  )
}
