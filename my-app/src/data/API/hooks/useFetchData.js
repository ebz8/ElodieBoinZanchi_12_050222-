import { useState, useEffect } from "react"

import UserMapper from "../mappers/UserMapper"
import UserActivityMapper from "../mappers/UserActivityMapper"
import UserPerformanceMapper from "../mappers/UserPerformanceMapper"
import UserAverageSessionsMapper from "../mappers/UserAverageSessionsMapper"


export const useFetchData = (id) => {
    // const urlAPI = 'http://localhost:3000/user'
    const urlMockAPI = '/mockUser'

    const currentUrl = urlMockAPI
    const configUrl = {
        USER_INFOS(id) {
            return `${currentUrl}/${id}.json`
        },
        USER_ACTIVITY(id) {
            return `${currentUrl}/${id}/activity.json`
        },
        USER_AVERAGESESSIONS(id) {
            return `${currentUrl}/${id}/average-sessions.json`
        },
        USER_PERFORMANCE(id) {
            return `${currentUrl}/${id}/performance.json`
        },
    }

    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState(null)

    const [userInfos, setUserInfos] = useState(null)
    const [userActivity, setUserActivity] = useState(null)
    const [userPerformance, setUserPerformance] = useState(null)
    const [userAverageSessions, setUserAverageSessions] = useState(null)

    
    const fetchUserInfos = (id) => {
        return fetch(configUrl.USER_INFOS(id))
        .then(res => res.json())
        .then(
            ({ data }) => {
                setUserInfos(UserMapper.convertToUser(data))
                console.log('fetch user infos done')
            })
            .catch((err) => {
                console.log(`fetch user infos : ${err}`)
                setError(err)
            })
    }

    const fetchUserActivity = (id) => {
        return fetch(configUrl.USER_ACTIVITY(id))
        .then(res => res.json())
        .then(
            ({ data }) => {
                setUserActivity(UserActivityMapper.convertToUserActivity(data))
                console.log('fetch user activity done')
            })
            .catch((err) => {
                console.log(`fetch user activity : ${err}`)
                setError(err)
            })
    }

    const fetchUserPerformance = (id) => {
        return fetch(configUrl.USER_PERFORMANCE(id))
        .then(res => res.json())
        .then(
            ({ data }) => {
                setUserPerformance(UserPerformanceMapper.convertToUserPerformance(data))
                console.log('fetch user performance done')
            })
            .catch((err) => {
                console.log(`fetch user performance : ${err}`)
                setError(err)
            })
    }

    const fetchUserAverageSessions = (id) => {
        return fetch(configUrl.USER_AVERAGESESSIONS(id))
        .then(res => res.json())
        .then(
            ({ data }) => {
                setUserAverageSessions(UserAverageSessionsMapper.convertToUserAverageSessions(data))
                console.log('fetch user average sessions done')
            })
            .catch((err) => {
                console.log(`fetch user average sessions : ${err}`)
                setError(err)
            })
    }

    useEffect(() => {
            fetch(currentUrl)
                .then(function() {
                    Promise.all([
                        fetchUserInfos(id),
                        fetchUserActivity(id),
                        fetchUserPerformance(id),
                        fetchUserAverageSessions(id)
                    ])
                    .finally(() => setIsLoaded(true))
                })
      }, [id])

      return {
        userInfos,
        userActivity,
        userPerformance,
        userAverageSessions,
        error,
        isLoaded
    }
}