import variables from '../../variables.scss'
import './DailyBarChart.scss'

import PropTypes from 'prop-types'

import {
  ResponsiveContainer,
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  Rectangle
} from 'recharts'

  /**
   * DailyBarChart's custom Tooltip by tweaking component props and passing in custom component
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

   /**
   * DailyBarChart's custom cursor on hover
   * @param {number} x coordinate 
   * @param {number} y coordinate 
   * @param {number} width of hover effect
   * @param {number} height of hover effect
   * @returns {ReactElement}
   */
const CustomCursor = ({ x, y, width, height }) => {
  return <Rectangle
          opacity= {0.1}
          x={x +10} y={y}
          width={width - 20} height={height} />
}

  /**
   * DailyBarChart's Custom legend
   * @param {Array} payload data
   * @returns {ReactElement}
   */
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

/**
 * Daily Bar Chart component with formated dailyData from userActivity
 * @param {Object} userActivity current UserActivity from fetch data
 * @returns {reactElement}
 */
function DailyBarChart({ userActivity }) {
  // formatting data
  const dailyData = userActivity.sessions.map((item, index) => {
    return {
      dayAxis: index + 1,
      kilogram: item.kilogram,
      calories: item.calories
    }
  })

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
            tickLine={true}
            strokeOpacity='1'
            strokeWidth="1.5"
            stroke={variables.mediumsecondarycolor}
            tick={{ fontSize: 14, fontWeight: 500, opacity: 0.75, fill: variables.mediumdarksecondarycolor}}
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
            cursor={<CustomCursor/>}   
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
            name={`Calories br??l??es (kCal)`}
          />
          <Legend
            verticalAlign="top"
            content={<CustomLegend />}
          />
          
        </BarChart>
      </ResponsiveContainer>
  )
}


DailyBarChart.propTypes = {
  userActivity: PropTypes.object.isRequired
}

CustomTooltip.propTypes = {
  payload: PropTypes.array,
  active: PropTypes.bool
}

CustomLegend.propTypes = {
  payload: PropTypes.array
}

export default DailyBarChart