import UserActivity from '../models/UserActivity'

export default class UserActivityMapper{
    static convertToUserActivity (json) {
        return new UserActivity (
            json.userId,
            json.sessions
        )
    }
}