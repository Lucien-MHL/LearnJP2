import { useMemo, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'
import { S } from './styles'
import { Home } from '../../../assets/icons'
import { useDevice } from '../../../hooks'
import * as q from '../../../redux/slices/questionSlice'
import * as a from '../../../redux/slices/answerSlice'
import AnswerResult from './AnswerResult'
import Input from './Input'
import Finish from './Finish'

export default function WebView() {
  const { t } = useTranslation()
  const device = useDevice()
  const dispatch = useDispatch()
  const current = useSelector(state => q.selectById(state, 'current'))
  const total = useSelector(state => q.selectById(state, 'total'))
  const count = useSelector(state => q.selectById(state, 'count'))
  const list = useSelector(state => q.selectById(state, 'list'))
  const log = useSelector(state => a.selectById(state, 'log'))
  const showResult = useSelector(state => a.selectById(state, 'showResult'))
  const value = useRef()
  const onSubmit = e => {
    e.preventDefault()
    const v = value.current[0].value
    if (v) {
      const payload = { user: v, truly: current.sound, id: current.id }
      dispatch(a.checkAnswer(payload))
    } else return
  }
  const isFinish = useMemo(() => {
    return log.length === 5 ? true : list.length ? false : true
  }, [log, list])

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
          {/* TODO:
              目前暫時以題目都完成後顯示結束頁面為主。
              但之後會需要調整為:
              1. 五題錯誤即結束遊戲。
              2. 都答對才結束遊戲。
              3. 都答對但錯誤不到五題。
         */}
          {isFinish ? (
            <Finish />
          ) : (
            <>
              <S.HomeIcon to='/'>
                <Home size={'100%'} />
              </S.HomeIcon>
              <S.QuestionSection>
                <S.Subject>{current.word}</S.Subject>
              </S.QuestionSection>
              <S.InputSection onSubmit={onSubmit} ref={value}>
                <S.Blackboard>
                  <S.NumberOfQuestion>
                    <S.Current>{t('current', { current: count })}</S.Current>
                    <S.Total>{t('total', { total: total })} </S.Total>
                  </S.NumberOfQuestion>
                  {showResult ? <AnswerResult id={current.id} /> : <Input />}
                </S.Blackboard>
              </S.InputSection>
            </>
          )}
        </S.Container>
      )}
    </>
  )
}
