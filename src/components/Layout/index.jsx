import { Outlet } from 'react-router-dom'
import { S } from './styles'
import { useDevice } from '../../hooks'

export default function Layout() {
  const device = useDevice()
  const isMobile = device.isMobile()

  return (
    <S.Container $isMobile={isMobile}>
      <Outlet />
    </S.Container>
  )
}
