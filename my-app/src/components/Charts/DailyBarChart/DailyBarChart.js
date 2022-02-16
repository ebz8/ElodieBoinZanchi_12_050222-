import './DailyBarChart.scss'
import variables from '../../../variables.scss';

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

/**
 * Daily Bar Chart component
 * @param {Object} userActivity current UserActivity from fetch data
 * @returns 
 */
export default function DailyBarChart({ userActivity }) {
 //////////////////////////////////////////////
  ///////////// formating data ////////////////  
  //////////////////////////////////////////////
  const dailyData = userActivity.sessions.map((item, index) => {
    return {
      dayAxis: index + 1,
      kilogram: item.kilogram,
      calories: item.calories
    }
  })

////////////////////////////////////////////////////////////////////////////////
// Custom chart by tweaking component props and passing in custom components //
////////////////////////////////////////////////////////////////////////////////
  /**
   * Custom Tooltip component on hover
   * @param {Array} payload [0] :  Yaxis 1 (kg), [1] : Yaxis 2 (kCal)
   * @param {Boolean} active active state
   * @returns {ReactElement|null} React Component if active, or null
   */
  const CustomTooltip = ({ payload, active }) => {
    if (active) {
      return (
        <div className='tooltip'>
          <p>{payload[0].value}kg</p>
          <p>{payload[1].value}Kcal</p>
        </div>
      )
    }
    return null
  }

  const CustomLegend = ({ payload }) => {
      return (
        <ul className='legend'>
        {
          payload.map((entry, index) => (
            <li key={`item-${index}`}>{entry.value}</li>
          ))
        }
      </ul>
      )
  }

  return (
      <ResponsiveContainer className="dailybarchart" height="100%" width="100%">
        <BarChart
          width='100%'
          data={dailyData}
          barGap={8}
        >
          <CartesianGrid
            vertical={false}
            strokeDasharray={3}
          />
          <XAxis
            dataKey='dayAxis'
            tickMargin={12}
            tickLine={false}
            strokeOpacity='1'
            strokeWidth="1.5"
            stroke={variables.mediumdarksecondarycolor}
            tick={{ fontSize: 14, fontWeight: 500, opacity: 1}}
            // padding={{ left: -50, right: -50 }}
          />
          <YAxis
            dataKey='kilogram'
            yAxisId="kilogram"
            domain={['dataMin - 1', 'dataMax + 2']}
            tickCount='3'
            orientation='right'
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 14, fontWeight: 500, opacity: 0.7 }}
            dx={20}
          />
          <YAxis
            dataKey='calories'
            domain={[0, 'dataMax + 50']}
            yAxisId="calories"
            tickCount='3'
            hide={true}     
          />
          <Tooltip
            content={<CustomTooltip />}
            isAnimationActive={true}
            cursor={{ opacity: 0.7 }}          
          />
          <Bar
            dataKey="kilogram"
            fill={variables.secondaryColor}
            yAxisId='kilogram'
            barSize={7}
            radius={[10, 10, 0, 0]}
            legendType='circle'
            name={`Poids (kg)`}
          />
          <Bar
            dataKey="calories"
            fill={variables.darkenmaincolor}
            yAxisId='calories'
            barSize={7}
            radius={[10, 10, 0, 0]}
            legendType='circle'
            name={`Calories brûlées (kCal)`}
          />
          <Legend
            verticalAlign="top"
            content={<CustomLegend />}
          />
          
        </BarChart>
      </ResponsiveContainer>
  );
}
