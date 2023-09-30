import { S } from './styles'
import { Home } from '../../../assets/icons'

export default function MobileView() {
  return (
    <S.Container>
      <S.HomeIcon to='/'>
        <Home />
      </S.HomeIcon>
      <S.QuestionSection>
        <S.Subject>ツ</S.Subject>
        <S.Count>1/46</S.Count>
      </S.QuestionSection>
    </S.Container>
  )
}
