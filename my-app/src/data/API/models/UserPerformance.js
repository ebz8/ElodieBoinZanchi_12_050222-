/**
 * Class to create an UserPerformance
 * 
 * @property {number} id user's id number
 * @property {object} kind kinds of performance (cardio, energy, endurance, strength, speed, intensity)
 * @property {array} data user's performance data (contains objects)
 */
export default class UserPerformance {
    /** @constructor */
    constructor(id, kind, data) {
        this.userId = id
        this.kind = kind
        this.data = data
    }
}