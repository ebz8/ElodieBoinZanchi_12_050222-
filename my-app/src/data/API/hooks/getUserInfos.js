import { configUrl } from '../../config'
import UserMapper from '../mappers/UserMapper'
import UseFetch from './UseFetch'

export const getUserInfos = (id) => {
    const mapper = UserMapper.convertToUser
    return UseFetch(configUrl.USER_INFOS(id), mapper)
  }
