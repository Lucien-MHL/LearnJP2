import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'
import { S } from './styles'
import { Home } from '../../../assets/icons'
import { useDevice } from '../../../hooks'
import * as question from '../../../redux/slices/questionSlice'
import * as answer from '../../../redux/slices/answerSlice'
import Option from './Option'
import AnswerResult from './AnswerResult'
import Finish from './Finish'

export default function MobileView() {
  const { t } = useTranslation()
  const device = useDevice()
  const current = useSelector(state => question.selectById(state, 'current'))
  const count = useSelector(state => question.selectById(state, 'count'))
  const total = useSelector(state => question.selectById(state, 'total'))
  const opts = useSelector(state => question.selectById(state, 'opts'))
  const list = useSelector(state => question.selectById(state, 'list'))
  const shouldFinish = useSelector(state =>
    answer.selectById(state, 'shouldFinish')
  )
  const showResult = useSelector(state =>
    answer.selectById(state, 'showResult')
  )

  const isFinish = useMemo(() => {
    return shouldFinish ? false : list.length ? true : false
  }, [shouldFinish, list.length])

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
            <>
              <S.HomeIcon to='/'>
                <Home />
              </S.HomeIcon>
              <S.QuestionSection>
                <S.Subject>{current.word}</S.Subject>
                <S.Count>{`${count}/${total}`}</S.Count>
              </S.QuestionSection>
              <S.AnswerSection>
                <S.Options
                  $content={showResult ? t('result') : t('chose_answer')}
                  $result={showResult}
                >
                  {showResult ? (
                    <AnswerResult id={current.id} />
                  ) : (
                    <>
                      {opts.map(i => (
                        <Option key={i.id} sound={i.sound} current={current} />
                      ))}
                    </>
                  )}
                </S.Options>
              </S.AnswerSection>
            </>
          ) : (
            <Finish />
          )}
        </S.Container>
      )}
    </>
  )
}
