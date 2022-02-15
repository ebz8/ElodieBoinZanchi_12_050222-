// ici créer variable d'environnement pour switcher facilement du mock au vrai call API
// ensuite crer des fonctions pour chaque objet à récupérer avec getNomObjet
// à appeler dans le.s composant.s concerné.s
// endpoints urls : prod = API / dev = MOCK API

const configURL = {
    prod: {
        USER_INFOS(id) {
            return `http://localhost:3000/user/${id}`
        },
        USER_ACTIVITY(id) {
            return `http://localhost:3000/user/${id}/activity`
        },
        USER_SESSIONS(id) {
            return `http://localhost:3000/user/${id}/average-sessions`
        },
        USER_PERFORMANCE(id) {
            return `http://localhost:3000/user/${id}/performance`
        },
    },
    dev: {
        USER_INFOS(id) {
            return `/mockUser/${id}.json`
        },
        USER_ACTIVITY(id) {
            return `/mockUser/${id}/userActivity.json`
        },
        USER_SESSIONS(id) {
            return `/mockUser/${id}/userAverageSession.json`
        },
        USER_PERFORMANCE(id) {
            return `/mockUser/${id}/userPerformance.json`
        },
    }
}
export { configURL }


// /**
//  * If set to false, the app will get the mocked data
//  * If set to true, the app will call the api
//  * (instructions for API installation in Read Me)
//  * @type {boolean}
//  */
// const dev = 'development' 
// const prod = 'production'

// export const callAPI = dev

