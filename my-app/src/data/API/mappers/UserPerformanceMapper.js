import UserPerformance from '../models/UserPerformance'

/**
 * Mapper getting json data and converting them to new instances of UserPerformance
 * @class
 * @property {object} json fetched data
 */
class UserPerformanceMapper{
    static convertToUserPerformance (json) {
        return new UserPerformance (
            json.userId,
            json.kind,
            json.data,
        )
    }
}

export default UserPerformanceMapper