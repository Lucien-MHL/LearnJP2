import PropType from 'prop-types'

export default function Wrong({ color, size = '30px' }) {
  const fill = color ? color : 'none'
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill={fill}
      width={size}
      height={size}
      viewBox='0 0 256 256'
    >
      <path d='M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z' />
    </svg>
  )
}

Wrong.propTypes = {
  color: PropType.string,
  size: PropType.string,
}
