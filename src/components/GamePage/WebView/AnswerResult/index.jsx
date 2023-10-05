import { useTranslation } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import PropType from 'prop-types'
import { S } from './styles'
import {
  selectById,
  closeAnswerResult,
} from '../../../../redux/slices/answerSlice'
import { nextSubject } from '../../../../redux/slices/questionSlice'

export default function AnswerResult({ id }) {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const a = useSelector(state => selectById(state, 'answer'))
  const target = {
    key: 'keydown',
    func: e => {
      if (e.code === 'Space') {
        dispatch(closeAnswerResult())
        dispatch(nextSubject(id))
        return
      }
    },
  }

  useEffect(() => {
    document.addEventListener(target.key, target.func)
    return () => document.removeEventListener(target.key, target.func)
  }, [target.func, target.key])
  return (
    <S.Container>
      <S.ResultSection $color={a.color}>
        <S.PreFix>{a.result ? 'O' : 'X'}</S.PreFix>
        <S.Text>{t(`answer.${a.text}`)}</S.Text>
      </S.ResultSection>
      {!a.result && (
        <S.Comparison>
          <S.Txt>{t('comparison.user', { u: a.user })}</S.Txt>
          <S.Txt>{t('comparison.truly', { t: a.truly })}</S.Txt>
        </S.Comparison>
      )}

      <S.PressToNext>{t('next_subject.web')}</S.PressToNext>
    </S.Container>
  )
}

AnswerResult.propTypes = {
  id: PropType.string,
}
