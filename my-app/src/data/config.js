/**
 *  Allows to switch easily between different database urls (called in useFetch custom hook)
 *  By configuring currentUrl constant
 */

    const urlAPI = 'http://localhost:3000/user'
    const urlMockAPI = '/mockUser'

    const currentUrl = urlAPI

    const configUrl = {
        USER_INFOS(id) {
            return urlAPI === currentUrl ? `${currentUrl}/${id}` : `${currentUrl}/${id}.json`
        },
        USER_ACTIVITY(id) {
            return urlAPI === currentUrl ? `${currentUrl}/${id}/activity` : `${currentUrl}/${id}/activity.json`
        },
        USER_AVERAGESESSIONS(id) {
            return urlAPI === currentUrl ? `${currentUrl}/${id}/average-sessions` : `${currentUrl}/${id}/average-sessions.json`
        },
        USER_PERFORMANCE(id) {
            return urlAPI === currentUrl ? `${currentUrl}/${id}/performance` : `${currentUrl}/${id}/performance.json`
        },
    }

    export { currentUrl, configUrl }


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
