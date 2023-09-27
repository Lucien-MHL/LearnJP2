import data from '../../assets/data'

export const linkData = () =>
  Object.keys(data).map(e => ({ key: e, link: `/${e}` }))
