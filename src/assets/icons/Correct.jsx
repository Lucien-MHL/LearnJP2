import PropType from 'prop-types'

export default function Correct({ color, size = '30px' }) {
  const fill = color ? color : 'none'
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill={fill}
      width={size}
      height={size}
      viewBox='0 0 32 32'
    >
      <path d='M16 4C9.384 4 4 9.384 4 16s5.384 12 12 12s12-5.384 12-12S22.616 4 16 4zm0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16S10.465 6 16 6z' />
    </svg>
  )
}

Correct.propTypes = {
  color: PropType.string,
  size: PropType.string,
}
