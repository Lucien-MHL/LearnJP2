import { S } from './styles'
import { Home } from '../../../assets/icons'
import { useTranslation } from 'react-i18next'
import { useDevice } from '../../../hooks'

export default function MobileView() {
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
            <Home />
          </S.HomeIcon>
          <S.QuestionSection>
            <S.Subject>ツ</S.Subject>
            <S.Count>1/46</S.Count>
          </S.QuestionSection>
          <S.AnswerSection>
            <S.Options $content={t('chose_answer')}>
              <S.Item>shi</S.Item>
              <S.Item>wa</S.Item>
              <S.Item>se</S.Item>
              <S.Item>o</S.Item>
              <S.Item>tsu</S.Item>
              <S.Item>fu</S.Item>
            </S.Options>
          </S.AnswerSection>
        </S.Container>
      )}
    </>
  )
}
