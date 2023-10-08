import { useTheme } from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import PropType from 'prop-types'
import { S } from './styles'
import Chart from '../../../assets/icons/Chart'
import { selectById } from '../../../redux/slices/answerSlice'
import { openModal } from '../../../redux/slices/switchSlice'

const defaultStyles = {
  size: '35px',
  position: {
    top: 16,
    right: 16,
  },
}

export default function ChartIcon(props) {
  const { mercury } = useTheme()
  const dispatch = useDispatch()
  const log = useSelector(state => selectById(state, 'log'))
  const shouldShow = log.length ? true : false
  const {
    size = defaultStyles.size,
    position = defaultStyles.position,
    color = mercury,
  } = props

  if (!shouldShow) return null

  return (
    <S.IconSection $size={size} $position={position}>
      <S.Clickable onClick={() => dispatch(openModal())} />
      <S.ShowFailsNumber>{log.length}</S.ShowFailsNumber>
      <Chart color={color} />
    </S.IconSection>
  )
}

ChartIcon.propTypes = {
  size: PropType.string,
  position: PropType.shape({
    top: PropType.number,
    left: PropType.number,
    right: PropType.number,
    bottom: PropType.number,
  }),
  color: PropType.string,
}
