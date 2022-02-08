import './RadialBarChart.scss'

import D3RadialBarChart from "./D3RadialBarChart"

export default function RadialBarChart({todayScore}) {
  const width = 170;
  const height = 170;
  const centerX = width / 2;
  const centerY = height / 2;

  // placer ici tous les éléments qui ne nécessitent pas de chargement de données
  // s'affichent avant le fetch
  // chargement des éléments interactifs D3 une fois le contenu chargé
  return (
    <div className="radialbarchart">
      <h3>Score</h3>
        <D3RadialBarChart
          todayScore={todayScore}
          width={width}
          height={height}
          centerX={centerX}
          centerY={centerY}
          />
    </div>
  )
}
