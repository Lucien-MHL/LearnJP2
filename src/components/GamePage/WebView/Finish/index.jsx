import { useTranslation } from 'react-i18next'
import { useTheme } from 'styled-components'
import { useParams } from 'react-router-dom'
import { useMemo } from 'react'
import { S } from './styles'
import data from '../../../../assets/data'
import { useSelector } from 'react-redux'
import { selectById } from '../../../../redux/slices/answerSlice'

export default function Finish() {
  const { t } = useTranslation()
  const { red, green } = useTheme()
  const { category } = useParams()
  const log = useSelector(state => selectById(state, 'log'))
  const finishTitle = useSelector(state => selectById(state, 'finishTitle'))

  const [hasLog, failsLog] = useMemo(() => {
    const getSpecifyData = data[category]
    return [
      log.length ? true : false,
      log.map(i => {
        const v = getSpecifyData.find(e => e.id === i.id)
        return {
          ...v,
          user: i.user,
        }
      }),
    ]
  }, [log, category])

  return (
    <>
      <S.Header>
        <S.Title>{t(`finish.${finishTitle}`)}</S.Title>
      </S.Header>

      {hasLog ? (
        <S.FailingDisplay>
          {failsLog.map(i => (
            <S.Row key={i.id}>
              <S.Item>{i.word}</S.Item>
              <S.Item $color={green}>{i.sound}</S.Item>
              <S.Item $color={red}>{i.user}</S.Item>
            </S.Row>
          ))}
        </S.FailingDisplay>
      ) : null}

      <S.LinkGroup $marginTop={hasLog ? 'auto' : '130px'}>
        <S.link to='/'>{t('back_to_home')}</S.link>
        <S.link to={`/${category}`}>{t('retry')}</S.link>
      </S.LinkGroup>
    </>
  )
}
