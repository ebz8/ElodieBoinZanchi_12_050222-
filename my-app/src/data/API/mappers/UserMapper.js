import User from '../models/User'

export default class UserMapper{
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