import "./RadialBarChart.scss"
import variables from '../../variables.scss';

import * as d3 from "d3"
import PropTypes from "prop-types"


/**
 * Radial Bar Chart component showing user's score
 * @param {Object} userScore current score from fetch data
 * @returns {reactElement}
 */
function D3RadialBarChart({ userScore }) {

  const width = 170
  const height = 170
  const barWidth = 10
  const centerX = width / 2
  const centerY = height / 2

  // progress bar
  const scoreBarOuterRadius = width / 2
  const scoreBarInnerRadius = width / 2 - barWidth
  const scoreArcGenerator = d3
    .arc()
    .innerRadius(scoreBarInnerRadius)
    .outerRadius(scoreBarOuterRadius)
    .startAngle(0)
    .cornerRadius(5)
  const tauProgressArc = (value) =>
    scoreArcGenerator({
      // http://tauday.com/tau-manifesto
      endAngle: -2 * Math.PI * value,
    });

  return (
    <div className="radialbarchart">
      <svg width={width} height={height} className="chart-svg">
        {/* progressive bar */}
        <g transform={`translate(${width / 2}, ${height / 2})`}>
          <path
            d={tauProgressArc(userScore)}
            cx={centerX}
            cy={centerY}
            fill={variables.maincolor}
          />
        </g>

        <circle
          cx={centerX}
          cy={centerY}
          r={centerY - barWidth}
          fill={variables.neutralcolor}
        />

        {/* score % */}
        <text
          className="chart-svg-score"
          stroke={variables.secondarycolor}
          x={centerX}
          y={centerY - 10}
          textAnchor="middle"
          fontSize="1.4em"
        >
          {" "}
          {`${userScore * 100}%`}
        </text>

        <text
          className="chart-svg-txt"
          fill={variables.secondarycolor}
          x={centerX}
          y={centerY}
          textAnchor="middle"
          dy="1.2em"
        >
          {" "}
          de votre{" "}
        </text>

        <text
          className="chart-svg-txt"
          fill={variables.secondarycolor}
          x={centerX}
          y={centerY + 10}
          textAnchor="middle"
          dy="2rem"
        >
          {" "}
          objectif{" "}
        </text>
      </svg>
    </div>
  )
}

D3RadialBarChart.propTypes = {
  userScore: PropTypes.number.isRequired,
}

export default D3RadialBarChart