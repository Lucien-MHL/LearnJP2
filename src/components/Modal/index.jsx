import { useTranslation } from 'react-i18next'
import { useTheme } from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
// import PropType from 'prop-types'
import { S } from './styles'
import { selectById } from '../../redux/slices/answerSlice'
import { selectSwitchById, closeModal } from '../../redux/slices/switchSlice'
import { useData } from '../../hooks'
import { Wrong } from '../../assets/icons'

export default function Modal() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { green, red, mercury } = useTheme()
  const log = useSelector(state => selectById(state, 'log'))
  const isModalOpen = useSelector(state =>
    selectSwitchById(state, 'isModalOpen')
  )
  const getList = useData(log)
  //   const {} = props

  return (
    <>
      {isModalOpen ? (
        <S.Container>
          <S.Modal>
            <S.CloseIcon onClick={() => dispatch(closeModal())}>
              <Wrong color={mercury} />
            </S.CloseIcon>
            <S.Title>{t('fails_log')}</S.Title>
            <S.FailsLog>
              <S.Row>
                <S.Item>題目</S.Item>
                <S.Item $color={green}>O</S.Item>
                <S.Item $color={red}>X</S.Item>
              </S.Row>
              {getList.map(e => (
                <S.Row key={e.id}>
                  <S.Item>{e.word}</S.Item>
                  <S.Item $color={green}>{e.sound}</S.Item>
                  <S.Item $color={red}>{e.user}</S.Item>
                </S.Row>
              ))}
            </S.FailsLog>
          </S.Modal>
        </S.Container>
      ) : null}
    </>
  )
}

Modal.propTypes = {}
