import { useTranslation } from 'react-i18next'
import { S } from './styles'
import { linkData } from '../linkData'

export default function MobileView() {
  const { t } = useTranslation()

  return (
    <S.Container>
      <S.Title>
        <S.Main>{t('homepage_title.main')}</S.Main>
        <S.Sub>{t('homepage_title.sub')}</S.Sub>
      </S.Title>
      <S.LinkGroup>
        {linkData().map(e => (
          <S.LinkButton key={e.key} to={e.link}>
            {t(e.key)}
          </S.LinkButton>
        ))}
      </S.LinkGroup>
    </S.Container>
  )
}
