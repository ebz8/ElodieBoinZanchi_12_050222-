import User from '../models/User'

/**
 * Mapper getting json data and converting them to new instances of User, used as part of fetched data's modelisation class.
 * @class
 * @property {object} json fetched data
 */
class UserMapper{
    static convertToUser (json) {
        return new User (
            json.id,
            json.userInfos.firstName,
            json.userInfos.lastName,
            json.userInfos.age,
            json.todayScore,
            json.keyData,
        )
    }
}

export default UserMapper