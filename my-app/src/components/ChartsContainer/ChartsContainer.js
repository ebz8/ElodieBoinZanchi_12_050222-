import './ChartsContainer.scss'

import PropTypes from 'prop-types'

import DailyBarChartContainer from '../DailyBarChartContainer/DailyBarChartContainer'
import SessionsLineChartContainer from '../SessionsLineChartContainer/SessionsLineChartContainer'
import SpiderRadarChartContainer from '../SpiderRadarChartContainer/SpiderRadarChartContainer'
import RadialBarChartContainer from '../RadialBarChartContainer/RadialBarChartContainer'

function ChartsContainer({ userInfos, userActivity, userPerformance, userAverageSessions }) {

  return (
    <ul className="stats">
      <DailyBarChartContainer userActivity={userActivity} />
      <SessionsLineChartContainer userAverageSessions={userAverageSessions} />
      <SpiderRadarChartContainer userPerformance={userPerformance} />      
      <RadialBarChartContainer userInfos={userInfos} />    
    </ul>
  )
}


ChartsContainer.propTypes = {
  userInfos: PropTypes.object.isRequired,
  userActivity: PropTypes.object.isRequired,
  userPerformance: PropTypes.object.isRequired,
  userAverageSessions: PropTypes.object.isRequired,
}

export default ChartsContainer