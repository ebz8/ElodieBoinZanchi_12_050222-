import { configUrl } from '../../config'
import UserPerformanceMapper from '../mappers/UserPerformanceMapper'
import UseFetch from './UseFetch'

export const getUserPerformance = (id) => {
    const mapper = UserPerformanceMapper.convertToUserPerformance
    return UseFetch(configUrl.USER_PERFORMANCE(id), mapper)
  }