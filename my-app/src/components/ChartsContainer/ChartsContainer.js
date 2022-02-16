import './ChartsContainer.scss'

import DailyBarChartContainer from '../DailyBarChartContainer/DailyBarChartContainer'
import SessionsLineChartContainer from '../SessionsLineChartContainer/SessionsLineChartContainer'
import SpiderRadarChartContainer from '../SpiderRadarChartContainer/SpiderRadarChartContainer'
import RadialBarChartContainer from '../RadialBarChartContainer/RadialBarChartContainer'

export default function ChartsContainer({ userId }) {

  return (
    <ul className="stats">
      <DailyBarChartContainer userId={userId} />
      <SessionsLineChartContainer userId={userId} />
      <SpiderRadarChartContainer userId={userId} />      
      <RadialBarChartContainer userId={userId} />    
    </ul>
  )
}
