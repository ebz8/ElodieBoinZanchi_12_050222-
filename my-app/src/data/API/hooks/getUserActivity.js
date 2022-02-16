import { configUrl } from '../../config'
import UserActivityMapper from '../mappers/UserActivityMapper'
import UseFetch from './UseFetch'

export const getUserActivity = (id) => {
    const mapper = UserActivityMapper.convertToUserActivity
    return UseFetch(configUrl.USER_ACTIVITY(id), mapper)
  }