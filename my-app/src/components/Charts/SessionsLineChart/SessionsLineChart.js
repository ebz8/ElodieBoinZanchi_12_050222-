import './SessionsLineChart.scss'
import variables from '../../../variables.scss'

import PropTypes from 'prop-types'

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts'


  // days axis
  const customTickAxis = ({ x, y, payload }) => {
    return (
      <g transform={`translate(${x}, ${y + 5})`}>
        <text
          fill={variables.neutralcolor}
          textAnchor="middle"
          fillOpacity="0.5"
          x={0}
          y={0}
          dy={30}
        >
          {payload.value}
        </text>
    </g>
    )
  }

  // custom tool tip
  const customToolTip = ({ payload, active }) => {
    if (active) {
      return (
        <div className='tooltip'>
          <p>{payload[0].value} min</p>
        </div>
      )
    }
    return null
  }


function SessionsLineChart({ averageSessions }) {
  // formating data
  const week = {
    1: "L",
    2: "M",
    3: "M",
    4: "J",
    5: "V",
    6: "S",
    7: "D"
  }

  const sessionsData = averageSessions.map((item) => {
    return {
      sessionLength: item.sessionLength,
      dayNumber: item.day,
      dayName: week[item.day]
    }
  })
  // formating data for lines to escape the box
  const sessions = [
      { day: 0, sessionLength: 0, dayName : ' ' },
      ...sessionsData,
      { day: sessionsData.length + 1, sessionLength: 0, dayName : ' ' },
  ]
  
  //////////////////////////////////////////////////////
  ////////////////////// CUSTOMS  //////////////////////
  //////////////////////////////////////////////////////


  // component for custom hover effect
  const CustomHover = ({points}) => {
    return (
      <rect
        x={points[0].x}
        y="0"
        height='100%'
        width="100%"
        fill="rgba(0, 0, 0, 0.1)"
       />  
    ) 
  }
  // rajouter ici la couleur du fond ?
  return (
    <ResponsiveContainer width="100%" height="100%">
        <LineChart 
          className="sessionslinechart"
          data={sessions}
          margin={{ top: 85, bottom: 40, left: -20, right: -20}}
        >
          <XAxis
            dataKey='dayName'
            axisLine={false}
            tickLine={false}
            tick={customTickAxis}
          />
          <YAxis hide={true} />
          <Tooltip
            content={customToolTip}
            cursor={<CustomHover />}
          />
          <Line
            dataKey="sessionLength"
            type="monotone"
            stroke={variables.neutralcolor}
            strokeWidth="2"
            strokeOpacity="0.8"
            isAnimationActive={true}
            dot={false}
          />
        </LineChart>
    </ResponsiveContainer>
  )
}


SessionsLineChart.propTypes = {
  averageSessions: PropTypes.array.isRequired
}

customTickAxis.propTypes = {
  payload: PropTypes.array,
  x: PropTypes.number,
  y: PropTypes.number
}

customToolTip.propTypes = {
  payload: PropTypes.array,
  active: PropTypes.bool
}

export default SessionsLineChart