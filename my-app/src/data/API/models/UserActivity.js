/**
 * Class to create an UserActivity
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