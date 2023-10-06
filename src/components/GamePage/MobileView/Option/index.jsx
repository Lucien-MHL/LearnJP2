import { useRef } from 'react'
import PropType from 'prop-types'
import { useDispatch } from 'react-redux'
import { S } from './styles'
import { checkAnswer } from '../../../../redux/slices/answerSlice'

export default function Option(props) {
  const value = useRef()
  const dispatch = useDispatch()
  const handleClick = () => {
    const v = value.current.innerText
    if (v) {
      dispatch(
        checkAnswer({
          user: v,
          truly: props.current.sound,
          id: props.current.id,
        })
      )
    }
  }

  return (
    <S.Option ref={value} onClick={handleClick}>
      {props.sound}
    </S.Option>
  )
}

Option.propTypes = {
  sound: PropType.string,
  current: PropType.shape({
    sound: PropType.string,
    word: PropType.string,
    id: PropType.string,
  }),
}
