import { useTranslation } from 'react-i18next'
import { useTheme } from 'styled-components'
import { useParams } from 'react-router-dom'
import { useMemo } from 'react'
import { S } from './styles'
import data from '../../../../assets/data'

export default function Finish() {
  const { t } = useTranslation()
  const { red, green } = useTheme()
  const { category } = useParams()
  const linkList = useMemo(() => {
    const getOthers = Object.keys(data).filter(i => i !== category)
    const preSet = [
      { name: t('back_to_home'), link: '/' },
      { name: t('retry'), link: `/${category}` },
    ]
    const list = getOthers.map(i => ({
      name: t('go_challenge', { name: t(i) }),
      link: `/${i}`,
    }))
    return list.reduce(
      (arr, c) => {
        return [...arr, c]
      },
      [...preSet]
    )
  }, [category, t])
  /** TODO:
   *    暫時的假資料，用以測試畫面。
   *    等撰寫此業的邏輯時，即可刪除。
   */
  const fakeData = [
    { fail: 'aws', word: 'ア', sound: 'a', id: '1dc2c4d690ee8bdf' },
    { fail: 'aws', word: 'イ', sound: 'i', id: '60489b5f9cb0ee19' },
    { fail: 'aws', word: 'ウ', sound: 'u', id: 'c558111f32794060' },
    { fail: 'aws', word: 'エ', sound: 'e', id: 'fdbe0e8dadf9b900' },
    { fail: 'aws', word: 'オ', sound: 'o', id: 'b3bd5993aaf52bba' },
  ]

  return (
    <>
      <S.Header>
        <S.Title>{t('finish.well_done')}</S.Title>
      </S.Header>
      <S.FailingDisplay>
        {fakeData.map(i => (
          <S.Row key={i.id}>
            <S.Item>{i.word}</S.Item>
            <S.Item $color={green}>{i.sound}</S.Item>
            <S.Item $color={red}>{i.fail}</S.Item>
          </S.Row>
        ))}
      </S.FailingDisplay>
      <S.LinkGroup>
        {linkList.map((e, i) => (
          <S.link key={i} to={e.link}>
            {e.name}
          </S.link>
        ))}
      </S.LinkGroup>
    </>
  )
}
