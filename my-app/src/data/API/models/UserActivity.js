/**
 * Model to create an UserActivity, used as part of fetched data's modelisation class.
 * @class
 * @property {number} id user's id number
 * @property {array} sessions user's sessions (containing objects)
 */
class UserActivity {
    /** @constructor */
    constructor(id, sessions) {
        this.userId = id
        this.sessions = sessions
    }
}

export default UserActivity