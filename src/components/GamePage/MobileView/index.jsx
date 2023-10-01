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
      <S.AnswerSection>
        <S.Options>
          <S.Item>shi</S.Item>
          <S.Item>wa</S.Item>
          <S.Item>se</S.Item>
          <S.Item>o</S.Item>
          <S.Item>tsu</S.Item>
          <S.Item>fu</S.Item>
        </S.Options>
      </S.AnswerSection>
    </S.Container>
  )
}
