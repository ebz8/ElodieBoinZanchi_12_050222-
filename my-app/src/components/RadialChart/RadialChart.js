import "./RadialChart.scss"
import variables from '../../variables.scss'

import {
    RadialBar,
    RadialBarChart,
    PolarAngleAxis,
    ResponsiveContainer
} from 'recharts'

import PropTypes from "prop-types"

/**
 * Radial Bar Chart component showing user's score
 * @param {Object} userScore current score from fetch data
 * @returns {reactElement}
 */
function RadialChart({ userScore }) {
  // formatting data
  const scoreData = [{ scoreBar: userScore }]

  return (
    <ResponsiveContainer width='99%' height='100%'>
       <RadialBarChart
        innerRadius={75}
        outerRadius={85}
        startAngle={80}
        endAngle={360 + 80}
        data={scoreData}
        barSize={10}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 1]}
          angleAxisId={0}
          tick={false}
        />
        
        <circle cx="50%" cy="50%" fill="white" r="70" />
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
          <tspan dy="-20" fill="#000" className="score-number">
            {userScore * 100}%
          </tspan>
          <tspan x="50%" dy="26" fill="#74798C" className="score-word">
            de votre
          </tspan>
          <tspan x="50%" dy="26" fill="#74798C" className="score-word">
            objectif
          </tspan>
        </text>
        
        <RadialBar
          dataKey="scoreBar"
          cornerRadius={10}
          fill={variables.maincolor}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  )
}

RadialChart.propTypes = {
  userScore: PropTypes.number.isRequired,
}

export default RadialChart
