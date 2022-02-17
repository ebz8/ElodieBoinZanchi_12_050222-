import './SpiderRadarChart.scss'
import variables from '../../../variables.scss'

import PropTypes from 'prop-types'

import {
  ResponsiveContainer, RadarChart, PolarGrid,
  PolarAngleAxis, Radar
} from 'recharts'

  /**
   * Custom Tick axis by tweaking component props
   * @param {*} param0 
   * @returns 
   */
  const customTickAxis = ({ x, y, cx, cy, payload, ...rest}) => {
    return (
      <text
        {...rest}    
        y={y + (y - cy) / 10}
        x={x + (x - cx) / 17}
        fontSize={12}
        fontWeight={500}
      >
        {payload.value}
      </text>
    )
  }
  
function SpiderRadarChart({ userPerformance }) {

  ///////////// formating data ////////////////  
  const frenchLabels = {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
  }
  //// add labels to performance data object ////
  const performanceData = userPerformance.data.map((item) => {
    return {
      value: item.value,
      kind: item.kind,
      label: frenchLabels[item.kind]
    }
  })
  //// rotate to match figma mockup ////
  const rotatePerformanceData = performanceData.reverse()


  return (
      <ResponsiveContainer className="radarchart-container" width="99%" height="100%">
        <RadarChart outerRadius={90} data={rotatePerformanceData} cx="50%" cy="50%" >
            <PolarGrid
              gridType="polygon"
              polarRadius={[10, 20, 40, 65, 90]}
              stroke={variables.neutralcolor}
              radialLines={false}
            />
            <PolarAngleAxis
              dataKey='label'
              stroke="white"
              dy={4}  
              axisLine={false}
              tickLine={false}
              tick={customTickAxis}
            />
            <Radar dataKey="value" fill={variables.maincolor} fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
  )
}


SpiderRadarChart.propTypes = {
  userPerformance: PropTypes.object.isRequired
}

customTickAxis.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  cx: PropTypes.number,
  cy: PropTypes.number,
  payload: PropTypes.object,
  rest: PropTypes.object,
}

export default SpiderRadarChart