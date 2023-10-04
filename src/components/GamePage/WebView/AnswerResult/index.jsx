import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { S } from './styles'
import { selectById } from '../../../../redux/slices/answerSlice'

export default function AnswerResult() {
  const { t } = useTranslation()
  const a = useSelector(state => selectById(state, 'answer'))
  return (
    <S.Container>
      <S.ResultSection>
        <S.Text $color={a.color}>
          <S.PreFix>{a.result ? 'O' : 'X'}</S.PreFix>
          {t(`answer.${a.text}`)}
        </S.Text>
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
