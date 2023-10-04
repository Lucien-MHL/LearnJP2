import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useTheme } from 'styled-components'
import { S } from './styles'
import { Correct, Wrong } from '../../../../assets/icons'
import { selectById } from '../../../../redux/slices/answerSlice'

export default function AnswerResult() {
  const { t } = useTranslation()
  const palette = useTheme()
  const answer = useSelector(state => selectById(state, 'answer'))
  const size = '100%'

  return (
    <S.Container>
      <S.IconSection>
        {answer.result ? (
          <Correct color={palette[answer.color]} size={size} />
        ) : (
          <Wrong color={palette[answer.color]} size={size} />
        )}
      </S.IconSection>
      <S.ResultText $color={palette[answer.color]}>
        {t(`answer.${answer.text}`)}
      </S.ResultText>
    </S.Container>
  )
}
