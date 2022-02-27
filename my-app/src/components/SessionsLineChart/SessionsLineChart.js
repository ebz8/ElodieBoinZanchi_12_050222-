import './SessionsLineChart.scss'
import variables from '../../variables.scss'

import PropTypes from 'prop-types'

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Dot
} from 'recharts'


  /**
   * Custom ticks axis
   * @param {number} x 
   * @param {number} y
   * @param {object} payload data
   */
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

  /**
   * Custom tool tip on hover
   * @param {object} payload payload data
   * @param {boolean} active boolean to control active state of the element 
   */
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
  
  /**
   * Custom hover with darker effect
   * @param {points} points points coordinates 
   */
  const CustomHover = ({ points }) => {
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
  
  /**
   * Custom activeDot to have 2 dots with different opacity 
   * @param {Array} cx active dot's coordinates
   * @param {Array} cy active dot's coordinates
   * @returns {ReactElement}
   */
  const CustomDots = ({ cx, cy }) => {
    return (
      <g>
        <Dot r={10} fill='white'cy={cy} cx={cx} opacity='0.3'/>
        <Dot r={4} fill='white'cy={cy} cx={cx}/>
      </g>
    )
  }
/**
 * Line Chart component with formated datas from user's average sessions
 * @param {Object} averageSessions current user's average sessions from fetch data
 * @returns {reactElement} with SVG charts
 */
function SessionsLineChart({ averageSessions }) {
  //// formating data ////
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

  //// formating data for lines to escape the box ////
  const sessions = [
      { day: 0, sessionLength: 0, dayName : ' ' },
      ...sessionsData,
      { day: sessionsData.length + 1, sessionLength: 0, dayName : ' ' },
  ]



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
          <defs>
            <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.30"/>
              <stop offset="80%" stopColor="#ffffff" stopOpacity="1.OO"/>
            </linearGradient>
          </defs>  
          <Line
            dataKey="sessionLength"
            type="natural"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeOpacity="0.8"
            isAnimationActive={true}
            dot={false}
            activeDot={<CustomDots/>}
          />
        </LineChart>
    </ResponsiveContainer>
  )
}


SessionsLineChart.propTypes = {
  averageSessions: PropTypes.array.isRequired
}

customTickAxis.propTypes = {
  payload: PropTypes.object,
  x: PropTypes.number,
  y: PropTypes.number
}

customToolTip.propTypes = {
  payload: PropTypes.array,
  active: PropTypes.bool
}

CustomHover.propTypes = {
  points: PropTypes.array
}


export default SessionsLineChart