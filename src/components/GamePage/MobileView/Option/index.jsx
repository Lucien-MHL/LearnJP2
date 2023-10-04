import { useRef } from 'react'
import PropType from 'prop-types'
import { useDispatch } from 'react-redux'
import { S } from './styles'
// import { nextSubject } from '../../../../redux/slices/questionSlice'
import { checkAnswer } from '../../../../redux/slices/answerSlice'

export default function Option(props) {
  const value = useRef()
  const dispatch = useDispatch()
  const handleClick = () => {
    const { sound } = props.current
    const v = value.current.innerText
    if (v) {
      dispatch(checkAnswer(v === sound))

      /** TODO:
       *    目前暫且先已能順利顯示結果為主。
       *    在撰寫前往下一題邏輯時再做更改。
       */
      // dispatch(nextSubject(props.current.id))
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
