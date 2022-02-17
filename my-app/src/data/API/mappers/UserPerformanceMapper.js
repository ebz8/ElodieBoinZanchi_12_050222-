import UserPerformance from '../models/UserPerformance'

/**
 * Mapper getting json data and converting them to new instances of UserPerformance
 * 
 * @property {object} json fetched data
 */
export default class UserPerformanceMapper{
    static convertToUserPerformance (json) {
        return new UserPerformance (
            json.userId,
            json.kind,
            json.data,
        )
    }
}