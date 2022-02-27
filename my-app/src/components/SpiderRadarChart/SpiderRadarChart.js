import variables from '../../variables.scss'

import PropTypes from 'prop-types'

import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar
} from 'recharts'

  /**
   * Spider RadarChart's custom Tick axis by tweaking component props
   * @param {number} x 
   * @param {number} y
   * @param {number} cx
   * @param {number} cy
   * @param {object} payload
   * @param {object} rest
   */
  const customTickAxis = ({ x, y, cx, cy, payload, ...rest}) => {
    return (
      <text
        {...rest}    
        y={y + (y - cy) / 20}
        x={x + (x - cx) / 20}
        fontSize={12}
        fontWeight={500}
      >
        {payload.value}
      </text>
    )
  }

/**
 * Spider Radar Chart component with formated user's performance data
 * @param {Object} userPerformance current userPerformance from fetch data
 * @returns {reactElement}
 */
function SpiderRadarChart({ userPerformance }) {
  //// formatting data ////
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
      <ResponsiveContainer className="spiderradarchart" width="99%" aspect={1}>
        <RadarChart outerRadius={85} data={rotatePerformanceData} cx="50%" cy="50%" >
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