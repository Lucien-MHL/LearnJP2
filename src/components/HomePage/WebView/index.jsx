import { S } from './styles'
import { useTranslation } from 'react-i18next'
import { linkData } from '../linkData'

export default function WebView() {
  const { t } = useTranslation()

  return (
    <S.Container>
      <S.Header>
        <S.Main>{t('homepage_title.main')}</S.Main>
        <S.Sub>{t('homepage_title.sub')}</S.Sub>
      </S.Header>
      <S.ListSection>
        {linkData().map(e => (
          <S.LinkButton key={e.key} to={e.link}>
            {t(e.key)}
          </S.LinkButton>
        ))}
      </S.ListSection>
    </S.Container>
  )
}
