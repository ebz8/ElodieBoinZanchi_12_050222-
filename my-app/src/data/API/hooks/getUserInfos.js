import UseFetch from './UseFetch'
import { configUrl } from '../../config'

export const getUserInfos = (id) => {
    return UseFetch(configUrl.USER_INFOS(id))
  }
