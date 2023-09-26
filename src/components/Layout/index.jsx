import { Outlet } from 'react-router-dom'
import { S } from './styles'
import { useMediaQuery } from 'react-responsive'

export default function Layout() {
  const isDesktop = useMediaQuery({ minWidth: 1280 })

  return (
    <S.Container $isDesktop={isDesktop}>
      <Outlet context={isDesktop} />
    </S.Container>
  )
}
