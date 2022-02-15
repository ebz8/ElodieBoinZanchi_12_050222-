import UseFetch from './UseFetch'
import { configURL } from '../../config'

export const getUserInfos = (id) => {
    return UseFetch(configURL.dev.USER_INFOS(id))
  }
