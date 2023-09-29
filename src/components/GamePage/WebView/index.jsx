import { S } from './styles'
import { Home } from '../../../assets/icons'
import { useTranslation } from 'react-i18next'

export default function WebView() {
  const { t } = useTranslation()
  return (
    <S.Container>
      <S.HomeIcon to='/'>
        <Home size={'100%'} />
      </S.HomeIcon>
      <S.QuestionSection>
        <S.Subject>シ</S.Subject>
      </S.QuestionSection>
      <S.InputSection>
        <S.Blackboard>
          <S.NumberOfQuestion>
            <S.Current>{t('current', { current: 1 })}</S.Current>
            <S.Total>{t('total', { total: 46 })} </S.Total>
          </S.NumberOfQuestion>
          <S.Input type='text' placeholder='輸入答案' />
        </S.Blackboard>
      </S.InputSection>
    </S.Container>
  )
}
