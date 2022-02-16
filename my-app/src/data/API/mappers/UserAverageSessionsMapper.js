import UserAverageSessions from '../models/UserAverageSessions'

export default class UserAverageSessionsMapper{
    static convertToUserAverageSessions(json) {
        return new UserAverageSessions (
            json.userId,
            json.sessions
        )
    }
}