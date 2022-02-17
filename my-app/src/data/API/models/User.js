/**
 * Class to create an User
 * 
 * @property {number} id user's id number
 * @property {string} firstName user's first name
 * @property {string} lastName user's last name
 * @property {number} score user's daily score (ex: 0.12)
 * @property {object} keyData user's key data (calories, proteins, carbohydrates, lipids)
 */
export default class User {
    /** @constructor */
    constructor(id, firstName, lastName, age, score, keyData) {
        this.userId = id
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.score = score
        this.keyData = keyData
    }
}