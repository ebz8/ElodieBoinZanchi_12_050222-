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
  // const week = ['', 'L', 'M', 'M', 'J', 'V', 'S', 'D', '']

  // <h3>Durée moyenne des sessions</h3>

  return (
    <ResponsiveContainer className="sessionslinechart-container" width="99%" height="100%">
        <LineChart className="sessionslinechart" data={sessionsData}>
        <XAxis
          dataKey="dayNumber"
          axisLine={false}
          tickLine={false}
        />
        <YAxis hide={true} />
        <Tooltip
          content='dayNumber'
          // allowEscapeViewBox={{ x: true }}
        />
        <Legend verticalAlign="top" height={-36}/>
        <Line
          dataKey="sessionLength"
          type="monotone"
          stroke="white"
          strokeWidth="2"
          strokeOpacity="0.8"
          isAnimationActive={false}
          dot={false}
          name="Durée moyenne des sessions"
        />
        </LineChart>
    </ResponsiveContainer>
  )
}
