import './ChartsContainer.scss'

import DailyBarChart from "../Charts/DailyBarChart/DailyBarChart"
import SessionsLineChart from "../Charts/SessionsLineChart/SessionsLineChart"
import SpiderRadarChart from "../Charts/RadarChart/SpiderRadarChart"
import RadialBarChart from "../Charts/RadialBarChart/RadialBarChart"

export default function ChartsContainer({ user, userData }) {
    const todayScore = user.todayScore * 100
    const userDailyActivity = userData.userActivity
    const userAverageSessions = userData.userAverageSessions
    const userPerformance = userData.userPerformance

  return (
    <ul className="stats">
          <li className="stats-item dailybarchart-container">
            <h3>Activité quotidienne</h3>
            <DailyBarChart userDailyActivity={userDailyActivity}/>
          </li>
          <li className="stats-item sessionslinechart-container"> 
            <h3>Durée moyenne des <br />sessions</h3>
            <SessionsLineChart userAverageSessions={userAverageSessions}/>
          </li>
          <li className="stats-item spiderradarchart-container">
            <SpiderRadarChart userPerformance={userPerformance}/>
          </li>
          <li className="stats-item radialbarchart-container">
            <h3>Score</h3>
            <RadialBarChart todayScore={todayScore} />
          </li> 
        </ul>
  )
}
