import { useState, useEffect } from "react"

import { configUrl } from "../../config"

import UserMapper from "../mappers/UserMapper"
import UserActivityMapper from "../mappers/UserActivityMapper"
import UserPerformanceMapper from "../mappers/UserPerformanceMapper"
import UserAverageSessionsMapper from "../mappers/UserAverageSessionsMapper"


/**
 * 
 * Custom hook function : chaining promises to connect NodeJS backend (with configUrl import) and getting data with states
 * @param {string} id current user id get with useParams
 * @returns {object} userInfos, userActivity, userPerformance, userAverageSessions & error / isLoaded status
 */
export const useFetch = (id) => {

    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState(null)

    const [userInfos, setUserInfos] = useState(null)
    const [userActivity, setUserActivity] = useState(null)
    const [userPerformance, setUserPerformance] = useState(null)
    const [userAverageSessions, setUserAverageSessions] = useState(null)

    
    const fetchUserInfos = async (id) => {
        try {
            const res = await fetch(configUrl.USER_INFOS(id))
            const { data } = await res.json()
            setUserInfos(UserMapper.convertToUser(data))
            console.log('fetch user infos done')
        } catch (err) {
            console.log(`fetch user infos : ${err}`)
            setError(err)
        }
    }

    const fetchUserActivity = async (id) => {
        try {
            const res = await fetch(configUrl.USER_ACTIVITY(id))
            const { data } = await res.json()
            setUserActivity(UserActivityMapper.convertToUserActivity(data))
            console.log('fetch user activity done')
        } catch (err) {
            console.log(`fetch user activity : ${err}`)
            setError(err)
        }
    }

    const fetchUserPerformance = async (id) => {
        try {
            const res = await fetch(configUrl.USER_PERFORMANCE(id))
            const { data } = await res.json()
            setUserPerformance(UserPerformanceMapper.convertToUserPerformance(data))
            console.log('fetch user performance done')
        } catch (err) {
            console.log(`fetch user performance : ${err}`)
            setError(err)
        }
    }

    const fetchUserAverageSessions = async (id) => {
        try {
            const res = await fetch(configUrl.USER_AVERAGESESSIONS(id))
            const { data } = await res.json()
            setUserAverageSessions(UserAverageSessionsMapper.convertToUserAverageSessions(data))
            console.log('fetch user average sessions done')
        } catch (err) {
            console.log(`fetch user average sessions : ${err}`)
            setError(err)
        }
    }

    useEffect(() => {
        Promise.all([
            fetchUserInfos(id),
            fetchUserActivity(id),
            fetchUserPerformance(id),
            fetchUserAverageSessions(id)
        ])
        .finally(() => setIsLoaded(true))
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