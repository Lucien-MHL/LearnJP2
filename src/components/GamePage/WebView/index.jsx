import { S } from './styles'
import { Home } from '../../../assets/icons'
import { useTranslation } from 'react-i18next'
import { useDevice } from '../../../hooks'

export default function WebView() {
  const { t } = useTranslation()
  const device = useDevice()
  return (
    <>
      {device.isResize() ? (
        /** TODO:
         *    目前暫時先以純文字顯示，
         *    等之後在調整關於使用者 resize 後的 UI 。
         */
        <h1>請改回正確的裝置大小</h1>
      ) : (
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
      )}
    </>
  )
}
