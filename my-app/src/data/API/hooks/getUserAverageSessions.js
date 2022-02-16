import { configUrl } from '../../config'
import UserAverageSessionsMapper from '../mappers/UserAverageSessionsMapper'
import UseFetch from './UseFetch'

export const getUserAverageSessions = (id) => {
    const mapper = UserAverageSessionsMapper.convertToUserAverageSessions
    return UseFetch(configUrl.USER_AVERAGESESSIONS(id), mapper)
  }