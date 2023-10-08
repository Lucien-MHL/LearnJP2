import PropType from 'prop-types'

export default function Chart({ color, size = '100%' }) {
  const fill = color ? color : 'none'

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill={fill}
      width={size}
      height={size}
      viewBox='0 0 24 24'
    >
      <path d='M3 12h4v9H3v-9Zm14-4h4v13h-4V8Zm-7-6h4v19h-4V2Z' />
    </svg>
  )
}

Chart.propTypes = {
  color: PropType.string,
  size: PropType.string,
}
