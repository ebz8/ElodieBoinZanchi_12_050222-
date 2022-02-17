/**
 * Class to create an UserActivity
 * 
 * @property {number} id user's id number
 * @property {array} sessions user's sessions (containing objects)
 */
export default class UserActivity {
    /** @constructor */
    constructor(id, sessions) {
        this.userId = id
        this.sessions = sessions
    }
}