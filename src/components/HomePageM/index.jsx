import { useTranslation } from 'react-i18next'
import { S } from './styles'

export default function HomePageM() {
  const { t } = useTranslation()
  return (
    <S.Container>
      <S.Title>
        <S.Main>{t('homepage_title.main')}</S.Main>
        <S.Sub>{t('homepage_title.sub')}</S.Sub>
      </S.Title>
      <S.LinkGroup>
        <S.LinkButton>{t('hiragana')}</S.LinkButton>
        <S.LinkButton>{t('katakana')}</S.LinkButton>
        <S.LinkButton>{t('hiraganaDakuon')}</S.LinkButton>
        <S.LinkButton>{t('katakanaDakuon')}</S.LinkButton>
      </S.LinkGroup>
    </S.Container>
  )
}
