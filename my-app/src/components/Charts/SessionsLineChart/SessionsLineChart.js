import './SessionsLineChart.scss'

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Rectangle
} from 'recharts'

import { useState } from 'react'

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
  //////////////////////////////////////////////////////
  ////////////////////// CUSTOMS  //////////////////////
  //////////////////////////////////////////////////////
  // days axis
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

  // custom hover effect
  const customHover = (hoveredData) => {
    console.log(hoveredData)
    
    if (hoveredData && hoveredData.activePayload) {
      const hoveredX = hoveredData.chartX
      console.log(hoveredX)
    }
    
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
        <LineChart 
          className="sessionslinechart"
          data={sessions}
          onMouseOver={customHover}
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
            allowEscapeViewBox={{ x: true }}
            cursor={false}
          />
          <Line
            dataKey="sessionLength"
            type="monotone"
            stroke="white"
            strokeWidth="2"
            strokeOpacity="0.8"
            isAnimationActive={true}
            dot={false}
          />
        </LineChart>
    </ResponsiveContainer>
  )
}
