import { S } from './styles'
import { useTranslation } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'
import { Home } from '../../../assets/icons'
import { useDevice } from '../../../hooks'
import { selectById, nextSubject } from '../../../redux/slices/questionSlice'
import { useState } from 'react'

export default function WebView() {
  const [value, setValue] = useState('')
  const { t } = useTranslation()
  const device = useDevice()
  const dispatch = useDispatch()
  const current = useSelector(state => selectById(state, 'current'))
  const total = useSelector(state => selectById(state, 'total'))
  const count = useSelector(state => selectById(state, 'count'))
  const onSubmit = e => {
    e.preventDefault()
    if (e.target[0].value) {
      dispatch(nextSubject(current.id))
      setValue('')
    } else return
  }
  const onChange = e => {
    const v = e.target.value
    setValue(v.replace(/[^a-z]/, ''))
  }

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
            <S.Subject>{current.word}</S.Subject>
          </S.QuestionSection>
          <S.InputSection onSubmit={onSubmit}>
            <S.Blackboard>
              <S.NumberOfQuestion>
                <S.Current>{t('current', { current: count })}</S.Current>
                <S.Total>{t('total', { total: total })} </S.Total>
              </S.NumberOfQuestion>
              <S.Input
                type='text'
                placeholder={t('input_answer')}
                maxLength={3}
                onChange={onChange}
                value={value}
              />
            </S.Blackboard>
          </S.InputSection>
        </S.Container>
      )}
    </>
  )
}
