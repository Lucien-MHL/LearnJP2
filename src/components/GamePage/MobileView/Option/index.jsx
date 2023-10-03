import { useRef } from 'react'
import PropType from 'prop-types'
import { useDispatch } from 'react-redux'
import { S } from './styles'
import { nextSubject } from '../../../../redux/slices/questionSlice'

export default function Option(props) {
  const value = useRef()
  const dispatch = useDispatch()
  const handleClick = () => {
    /** TODO:
     *    在撰寫答題邏輯時再做更改。
     *    目前暫且先已能順利跑到下一題為主。
     */
    // const { sound } = props.current
    if (value.current.innerText) {
      dispatch(nextSubject(props.current.id))
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
