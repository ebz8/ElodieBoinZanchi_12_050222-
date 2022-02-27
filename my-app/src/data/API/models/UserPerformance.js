/**
 * Model to create an UserUserPerformance, used as part of fetched data's modelisation class.
 * @class
 * @property {number} id user's id number
 * @property {object} kind kinds of performance (cardio, energy, endurance, strength, speed, intensity)
 * @property {array} data user's performance data (contains objects)
 */
class UserPerformance {
    /** @constructor */
    constructor(id, kind, data) {
        this.userId = id
        this.kind = kind
        this.data = data
    }
}

export default UserPerformance