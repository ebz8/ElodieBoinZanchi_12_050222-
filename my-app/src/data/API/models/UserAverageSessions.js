/**
 * Class to create an UserAverageSessions
 * @class
 * @property {number} id user's id number
 * @property {array} sessions user's sessions (containing objects)
 */
class UserAverageSessions {
    /** @constructor */
    constructor(id, sessions) {
        this.userId = id
        this.sessions = sessions
    }
}

export default UserAverageSessions