/**
 * Model to create an UserAverageSessions, used as part of fetched data's modelisation class.
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