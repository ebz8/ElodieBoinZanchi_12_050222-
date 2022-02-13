import './SessionsLineChart.scss'

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts'

export default function SessionsLineChart({userAverageSessions}) {
  // formating data
  const userSessions = userAverageSessions.data.sessions
  const week = {
    1: "L",
    2: "M",
    3: "M",
    4: "J",
    5: "V",
    6: "S",
    7: "D"
  }

  const sessionsData = userSessions.map((item) => {
    return {
      sessionLength: item.sessionLength,
      dayNumber: item.day,
      dayName: week[item.day]
    }
  })
  
  // formating data to lines escape the box
  const sessions = [
      { day: 0, sessionLength: 0, dayName : ' ' },
      ...sessionsData,
      { day: sessionsData.length + 1, sessionLength: 0, dayName : ' ' },
    
  ]

  const customTickAxis = ({ x, y, payload }) => {
    return (
      <g transform={`translate(${x}, ${y + 5})`}>
        <text
          fill="white"
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
            content='dayName'
            allowEscapeViewBox={{ x: true }}
          />
          <Line
            dataKey="sessionLength"
            type="basis"
            stroke="white"
            strokeWidth="2"
            strokeOpacity="0.8"
            isAnimationActive={false}
            dot={false}
          />
        </LineChart>
    </ResponsiveContainer>
  )
}
