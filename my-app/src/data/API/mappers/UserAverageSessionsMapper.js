import UserAverageSessions from '../models/UserAverageSessions'

/**
 * Mapper getting json data and converting them to new instances of UserAverageSessions, used as part of fetched data's modelisation class.
 * @class
 * @property {object} json fetched data
 */
class UserAverageSessionsMapper {
    static convertToUserAverageSessions(json) {
        return new UserAverageSessions (
            json.userId,
            json.sessions
        )
    }
}

export default UserAverageSessionsMapper