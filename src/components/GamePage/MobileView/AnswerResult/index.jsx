import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useTheme } from 'styled-components'
import PropType from 'prop-types'
import { S } from './styles'
import { Correct, Wrong } from '../../../../assets/icons'
import {
  selectById,
  closeAnswerResult,
} from '../../../../redux/slices/answerSlice'
import { nextSubject } from '../../../../redux/slices/questionSlice'

export default function AnswerResult(props) {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const palette = useTheme()
  const answer = useSelector(state => selectById(state, 'answer'))
  const size = '100%'
  const onClick = () => {
    dispatch(nextSubject(props.id))
    dispatch(closeAnswerResult())
  }

  return (
    <S.Container>
      <S.ResultSection>
        <S.Icon>
          {answer.result ? (
            <Correct color={palette[answer.color]} size={size} />
          ) : (
            <Wrong color={palette[answer.color]} size={size} />
          )}
        </S.Icon>
        <S.ResultText $color={palette[answer.color]}>
          {t(`answer.${answer.text}`)}
        </S.ResultText>
      </S.ResultSection>
      {!answer.result && (
        <S.Comparison>
          <S.Text $color={palette.red}>
            {t('comparison.user', { u: answer.user })}
          </S.Text>
          <S.Text $color={palette.green}>
            {t('comparison.truly', { t: answer.truly })}
          </S.Text>
        </S.Comparison>
      )}
      <S.ToNextSubject onClick={onClick}>
        {t('next_subject.mobile')}
      </S.ToNextSubject>
    </S.Container>
  )
}

AnswerResult.propTypes = {
  id: PropType.string,
}
