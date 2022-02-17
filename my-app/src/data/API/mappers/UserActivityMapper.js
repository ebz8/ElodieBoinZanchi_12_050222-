import UserActivity from '../models/UserActivity'

/**
 * Mapper getting json data and converting them to new instances of UserActivity
 * 
 * @property {object} json fetched data
 */
export default class UserActivityMapper{
    static convertToUserActivity (json) {
        return new UserActivity (
            json.userId,
            json.sessions
        )
    }
}