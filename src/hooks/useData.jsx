import { useParams } from 'react-router-dom'
import PropType from 'prop-types'
import data from '../assets/data'

export default function useData(props) {
  const { category } = useParams()
  const currentData = data[category]
  const findById = (arr, id) => arr.find(e => e.id === id)

  if (Array.isArray(props)) {
    const direct = props.map(id => findById(currentData, id))

    return direct[0]
      ? direct
      : props.map(({ id, user }) => ({ ...findById(currentData, id), user }))
  } else {
    return findById(currentData, props)
  }
}

useData.propTypes = {
  id: PropType.string || PropType.array,
}
