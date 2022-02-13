import './SessionsLineChart.scss'

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts'

export default function SessionsLineChart({userAverageSessions}) {
  // formating data
  const week = ['', 'L', 'M', 'M', 'J', 'V', 'S', 'D', '']

  return (
    <ResponsiveContainer className="linechart-container stats-item">
      <LineChart></LineChart>

    </ResponsiveContainer>
  )
}
