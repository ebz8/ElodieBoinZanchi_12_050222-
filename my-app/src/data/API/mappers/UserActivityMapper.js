import UserActivity from '../models/UserActivity'

/**
 * Mapper getting json data and converting them to new instances of UserActivity
 * @class
 * @property {object} json fetched data
 */
class UserActivityMapper{
    static convertToUserActivity (json) {
        return new UserActivity (
            json.userId,
            json.sessions
        )
    }
}

export default UserActivityMapper