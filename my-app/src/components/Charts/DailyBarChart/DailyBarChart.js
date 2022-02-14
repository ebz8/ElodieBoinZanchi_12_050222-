import './DailyBarChart.scss'

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

export default function DailyBarChart({ userDailyActivity }) {
  ///////////// formating data ////////////////  
  const dailyActivity = userDailyActivity.data.sessions
  // rajouter les numéros
  console.log(dailyActivity)

  return (
    <ResponsiveContainer className="dailybarchart" height="100%" width="100%">
      <BarChart height='320' width='100%' data={dailyActivity}>
        <XAxis dataKey='day' tickMargin={10} />
        <YAxis
          dataKey='kilogram'
          tickCount='3'
          orientation='right'
          yAxisId="kilogram"
          // tickLine={false}
          // axisLine={false}
        />
        <YAxis
          dataKey='calories'
          tickCount='3'
          yAxisId="calories"
          // hide={true}
        />

        <CartesianGrid
          vertical={false}
          strokeDasharray="4 4"
          horizontalPoints={[20, 113]}
        />

        <Bar
          dataKey="kilogram"
          fill='black'
          yAxisId='kilogram'
          barSize={7}
          legendType='circle'
          radius={[10, 10, 0, 0]}
        />

        <Bar
          dataKey="calories"
          fill='red'
          yAxisId='calories'
          barSize={7}
          legendType='circle'
          radius={[10, 10, 0, 0]}
        />

        <Tooltip
          isAnimationActive={false}
          cursor={{ opacity: 0.6 }}
        />
      </BarChart>

    </ResponsiveContainer>
  )
}
