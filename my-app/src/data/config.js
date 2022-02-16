// ici créer variable d'environnement pour switcher facilement du mock au vrai call API
// ensuite crer des fonctions pour chaque objet à récupérer avec getNomObjet
// à appeler dans le.s composant.s concerné.s
// endpoints urls : prod = API / dev = MOCK API

const urlAPI = 'http://localhost:3000/user'
const urlMockAPI = '/mockUser'
// select the current call url between urlAPI and urlMockAPI
const currentUrl = urlMockAPI

const configUrl = {
    USER_INFOS(id) {
        return `${currentUrl}/${id}.json`
    },
    USER_ACTIVITY(id) {
        return `${currentUrl}/${id}/userActivity.json`
    },
    USER_SESSIONS(id) {
        return `${currentUrl}/${id}/userAverageSession.json`
    },
    USER_PERFORMANCE(id) {
        return `${currentUrl}/${id}/userPerformance.json`
    },
}
export { configUrl }



// const configURL = {
//     prod: {
//         USER_INFOS(id) {
//             return `http://localhost:3000/user/${id}`
//         },
//         USER_ACTIVITY(id) {
//             return `http://localhost:3000/user/${id}/activity`
//         },
//         USER_SESSIONS(id) {
//             return `http://localhost:3000/user/${id}/average-sessions`
//         },
//         USER_PERFORMANCE(id) {
//             return `http://localhost:3000/user/${id}/performance`
//         },
//     },
//     dev: {
//         USER_INFOS(id) {
//             return `/mockUser/${id}.json`
//         },
//         USER_ACTIVITY(id) {
//             return `/mockUser/${id}/userActivity.json`
//         },
//         USER_SESSIONS(id) {
//             return `/mockUser/${id}/userAverageSession.json`
//         },
//         USER_PERFORMANCE(id) {
//             return `/mockUser/${id}/userPerformance.json`
//         },
//     }
// }
