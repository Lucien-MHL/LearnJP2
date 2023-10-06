import { useTranslation } from 'react-i18next'
import { useTheme } from 'styled-components'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import * as q from '../../../../redux/slices/questionSlice'
import * as a from '../../../../redux/slices/answerSlice'
import { S } from './styles'

export default function Finish() {
  const { category } = useParams()
  const { t } = useTranslation()
  const { red, green } = useTheme()
  const log = useSelector(state => a.selectById(state, 'log'))
  const finishTitle = useSelector(state => a.selectById(state, 'finishTitle'))
  const data = useSelector(state => q.selectById(state, 'data'))
  const isHaveFails = log.length
  const failsLog =
    isHaveFails &&
    log.map(i => {
      const v = data.find(e => e.id === i.id)
      return {
        word: v.word,
        sound: v.sound,
        fail: i.user,
        id: i.id,
      }
    })

  return (
    <>
      <S.Header>
        <S.Title>{t(`finish.${finishTitle}`)}</S.Title>
      </S.Header>
      {isHaveFails ? (
        <S.FailingDisplay>
          {failsLog.map(i => (
            <S.Row key={i.id}>
              <S.Item>{i.word}</S.Item>
              <S.Item $color={green}>{i.sound}</S.Item>
              <S.Item $color={red}>{i.fail}</S.Item>
            </S.Row>
          ))}
        </S.FailingDisplay>
      ) : null}
      <S.LinkGroup>
        <S.link to='/'>{t('back_to_home')}</S.link>
        <S.link to={`/${category}`}>{t('retry')}</S.link>
      </S.LinkGroup>
    </>
  )
}
