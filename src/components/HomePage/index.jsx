import { S } from './styles'
import { useTranslation } from 'react-i18next'
// import data from '../../assets/data'

export default function HomePage() {
  const { t } = useTranslation()
  //   const gamePages = Object.keys(data).map(e => ({ word: t(e), link: `/${e}` }))

  return (
    <S.Container>
      <S.Header>
        <S.Main>{t('homepage_title.main')}</S.Main>
        <S.Sub>{t('homepage_title.sub')}</S.Sub>
      </S.Header>
      <S.ListSection>
        <S.LinkButton>{t('hiragana')}</S.LinkButton>
        <S.LinkButton>{t('katakana')}</S.LinkButton>
        <S.LinkButton>{t('hiraganaDakuon')}</S.LinkButton>
        <S.LinkButton>{t('katakanaDakuon')}</S.LinkButton>
      </S.ListSection>
    </S.Container>
  )
}
