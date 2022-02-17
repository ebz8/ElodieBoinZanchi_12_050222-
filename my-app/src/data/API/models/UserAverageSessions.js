/**
 * Class to create an UserAverageSessions
 * 
 * @property {number} id user's id number
 * @property {array} sessions user's sessions (containing objects)
 */
export default class UserAverageSessions {
    /** @constructor */
    constructor(id, sessions) {
        this.userId = id
        this.sessions = sessions
    }
}