import { useMediaQuery } from 'react-responsive'

export default function useDevice() {
  const wst = window.sessionStorage
  const isDesktop = useMediaQuery({ minWidth: 1280 })
  const key = 'd'
  const v = {
    desktop: 'w',
    mobile: 'm',
  }
  const get = () => wst.getItem(key)
  const set = () => {
    const ctx = isDesktop ? v.desktop : v.mobile
    return wst.setItem(key, ctx)
  }
  const isResize = () => {
    switch (get()) {
      case v.desktop:
        return isDesktop === false
      case v.mobile:
        return isDesktop === true
      default:
        break
    }
  }
  return {
    get,
    set,
    isMobile: () => get() === v.mobile,
    isResize,
  }
}
