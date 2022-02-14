import './DailyBarChart.scss'

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend
} from 'recharts'

export default function DailyBarChart({ userDailyActivity, neutralColor, mainColor, secondaryColor }) {
  ///////////// formating data ////////////////  
  const dailyActivity = userDailyActivity.data.sessions
  const dailyData = dailyActivity.map((item, index) => {
    return {
      dayAxis: index + 1,
      kilogram: item.kilogram,
      calories: item.calories
    }
  })

  console.log(dailyData)

  return (
    <ResponsiveContainer className="dailybarchart" height="100%" width="100%">
      <BarChart
        height='320'
        width='100%'
        data={dailyData}
      >
        <CartesianGrid
          vertical={false}
          strokeDasharray={4}
          horizontalPoints={[20, 113]}
        />

        <XAxis
          dataKey='dayAxis'
          tickMargin={15}
          tickLine={false}
        />

        <YAxis
          dataKey='kilogram'
          tickCount='3'
          orientation='right'
          yAxisId="kilogram"
          tickLine={false}
          axisLine={false}
        />

        <YAxis
          dataKey='calories'
          tickCount='3'
          yAxisId="calories"
          hide={true}     
        />

        <Bar
          dataKey="kilogram"
          fill={secondaryColor}
          yAxisId='kilogram'
          barSize={7}
          radius={[10, 10, 0, 0]}
        />

        <Bar
          dataKey="calories"
          fill={mainColor}
          yAxisId='calories'
          barSize={7}
          radius={[10, 10, 0, 0]}
        />

        <Legend
          verticalAlign="top"
          align='right'
          height={36}
          legendType='circle'
          // wrapperStyle={{top:-20}}
        />

        <Tooltip
          isAnimationActive={false}
          cursor={{ opacity: 0.6 }}
        />
      </BarChart>

    </ResponsiveContainer>
  )
}
