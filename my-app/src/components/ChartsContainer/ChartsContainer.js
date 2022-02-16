import './ChartsContainer.scss'

import DailyBarChartContainer from '../DailyBarChartContainer/DailyBarChartContainer'
import SessionsLineChartContainer from '../SessionsLineChartContainer/SessionsLineChartContainer'
import SpiderRadarChartContainer from '../SpiderRadarChartContainer/SpiderRadarChartContainer'
import RadialBarChartContainer from '../RadialBarChartContainer/RadialBarChartContainer'

export default function ChartsContainer({ userInfos, userActivity, userPerformance, userAverageSessions }) {

  return (
    <ul className="stats">
      <DailyBarChartContainer userActivity={userActivity} />
      <SessionsLineChartContainer userAverageSessions={userAverageSessions} />
      <SpiderRadarChartContainer userPerformance={userPerformance} />      
      <RadialBarChartContainer userInfos={userInfos} />    
    </ul>
  )
}
