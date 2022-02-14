import "./RadialBarChart.scss"
import variables from '../../../variables.scss';

// import { useEffect, useState } from "react"
import * as d3 from "d3"
import PropTypes from "prop-types"

export default function RadialBarChart({ todayScore }) {
  // const [dayScore, setDayScore] = useState(null)

  // useEffect(() => {
  //   // ICI trouver le moyen d'utiliser setDayScore pour mettre à jour :
  //   // le score en %
  //   // la barre de progession
  // }, [dayScore]);

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

  // placer ici tous les éléments qui ne nécessitent pas de chargement de données
  // s'affichent avant le fetch
  // chargement des éléments interactifs D3 une fois le contenu chargé (useState sur todayScore)
  return (
    <div className="radialbarchart">
      <svg width={width} height={height} className="chart-svg">
        {/* progressive bar : à afficher une fois les données chargées */}
        <g transform={`translate(${width / 2}, ${height / 2})`}>
          <path
            d={tauProgressArc(todayScore / 100)}
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

        {/* score en pourcentages : à afficher une fois les données chargées */}
        <text
          className="chart-svg-score"
          stroke={variables.secondarycolor}
          x={centerX}
          y={centerY - 10}
          textAnchor="middle"
          fontSize="1.4em"
        >
          {" "}
          {`${todayScore}%`}
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
  );
}

RadialBarChart.propTypes = {
  todayScore: PropTypes.number,
}
