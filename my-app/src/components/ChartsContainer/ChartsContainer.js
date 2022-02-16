import './ChartsContainer.scss'

import SessionsLineChart from "../Charts/SessionsLineChart/SessionsLineChart"
import SpiderRadarChart from "../Charts/RadarChart/SpiderRadarChart"
import RadialBarChart from "../Charts/RadialBarChart/RadialBarChart"
import DailyBarChartContainer from '../DailyBarChartContainer/DailyBarChartContainer'
import SessionsLineChartContainer from '../SessionsLineChartContainer/SessionsLineChartContainer'
import SpiderRadarChartContainer from '../SpiderRadarChartContainer/SpiderRadarChartContainer'

import userPerformance from '../../data/mockUser/12/performance.json'

export default function ChartsContainer({ userId }) {
    // const todayScore = user.todayScore * 100
    // const userDailyActivity = userActivity
    // const userAverageSessions = userAverageSessions
    // const userPerformance = userPerformance



  return (
    <ul className="stats">
            <DailyBarChartContainer userId={userId}/>
            <SessionsLineChartContainer userId={userId}/>
            <SpiderRadarChartContainer userId={userId}/>
          <li className="stats-item radialbarchart-container">
            <h3>Score</h3>
            <RadialBarChart userId={userId} />
          </li> 
        </ul>
  )
}
