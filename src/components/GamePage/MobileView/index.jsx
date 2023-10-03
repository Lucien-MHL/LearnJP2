import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { S } from './styles'
import { Home } from '../../../assets/icons'
import { useDevice } from '../../../hooks'
import { selectById } from '../../../redux/slices/questionSlice'
import Option from './Option'

export default function MobileView() {
  const { t } = useTranslation()
  const device = useDevice()
  const current = useSelector(state => selectById(state, 'current'))
  const count = useSelector(state => selectById(state, 'count'))
  const total = useSelector(state => selectById(state, 'total'))
  const opts = useSelector(state => selectById(state, 'opts'))

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
            <S.Subject>{current.word}</S.Subject>
            <S.Count>{`${count}/${total}`}</S.Count>
          </S.QuestionSection>
          <S.AnswerSection>
            <S.Options $content={t('chose_answer')}>
              {opts.map(i => (
                <Option key={i.id} sound={i.sound} current={current} />
              ))}
            </S.Options>
          </S.AnswerSection>
        </S.Container>
      )}
    </>
  )
}
