import { Outlet } from 'react-router-dom'
import { S } from './styles'

export default function Layout() {
  return (
    <S.Container>
      <Outlet />
    </S.Container>
  )
}
