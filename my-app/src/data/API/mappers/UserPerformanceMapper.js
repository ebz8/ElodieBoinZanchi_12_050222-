import UserPerformance from '../models/UserPerformance'

export default class UserPerformanceMapper{
    static convertToUserPerformance (json) {
        return new UserPerformance (
            json.userId,
            json.kind,
            json.data,
        )
    }
}