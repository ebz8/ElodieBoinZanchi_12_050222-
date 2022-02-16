import './ChartsContainer.scss'

import DailyBarChart from "../Charts/DailyBarChart/DailyBarChart"
import SessionsLineChart from "../Charts/SessionsLineChart/SessionsLineChart"
import SpiderRadarChart from "../Charts/RadarChart/SpiderRadarChart"
import RadialBarChart from "../Charts/RadialBarChart/RadialBarChart"

import userActivity from '../../data/mockUser/12/activity.json'
import userAverageSessions from '../../data/mockUser/12/average-sessions.json'
import userPerformance from '../../data/mockUser/12/performance.json'

export default function ChartsContainer({ userId }) {
    // const todayScore = user.todayScore * 100
    // const userDailyActivity = userActivity
    // const userAverageSessions = userAverageSessions
    // const userPerformance = userPerformance

    // const { isLoaded, error, data } = getUserActivity(userId)
  
    // if (isLoaded) {
    //   console.log(data)
    // }

  return (
    <ul className="stats">
          <li className="stats-item dailybarchart-container">
            <h3>Activité quotidienne</h3>
            <DailyBarChart userId={userId}/>
          </li>
          <li className="stats-item sessionslinechart-container"> 
            <h3>Durée moyenne des <br />sessions</h3>
            <SessionsLineChart userId={userId}/>
          </li>
          <li className="stats-item spiderradarchart-container">
            <SpiderRadarChart userId={userId}/>
          </li>
          <li className="stats-item radialbarchart-container">
            <h3>Score</h3>
            <RadialBarChart userId={userId} />
          </li> 
        </ul>
  )
}
