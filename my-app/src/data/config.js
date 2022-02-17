/**
 *  Allows to switch easily between different database urls (called in useFetch custom hook)
 *  ( by configuring currentUrl constant )
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

    export { configUrl }