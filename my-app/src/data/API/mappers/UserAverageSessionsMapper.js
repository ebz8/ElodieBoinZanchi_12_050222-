import UserAverageSessions from '../models/UserAverageSessions'

/**
 * Mapper getting json data and converting them to new instances of UserAverageSessions
 * 
 * @property {object} json fetched data
 */
export default class UserAverageSessionsMapper{
    static convertToUserAverageSessions(json) {
        return new UserAverageSessions (
            json.userId,
            json.sessions
        )
    }
}