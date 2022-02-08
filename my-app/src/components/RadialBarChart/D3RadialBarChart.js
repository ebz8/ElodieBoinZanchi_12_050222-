import './D3RadialBarChart.scss'
import * as d3 from "d3"

export default function D3RadialBarChart({todayScore, width, height, centerX, centerY}) {
    const colorCercle = 'white';
    const colorScore = 'black';
    const colorText = 'darkgrey';
    const scoreBar = d3.arc()
                        .innerRadius(todayScore)

    return (
        <svg width={width} height={height} className="chart-svg">
            <g>
                <circle
                    cx={centerX}
                    cy={centerY}
                    r={width / 2}
                    fill={colorCercle}
                />
                <text
                    className="chart-svg-score"
                    stroke={colorScore}
                    x={centerX}
                    y={centerY - 10}
                    text-anchor="middle"
                > {`${todayScore}%`}</text>
                <text
                    className="chart-svg-txt"
                    stroke={colorText}
                    stroke-width=".03rem"
                    x={centerX}
                    y={centerY}
                    text-anchor="middle"
                    dy=".8rem"
                > de votre </text>
                <text
                    className="chart-svg-txt"
                    stroke={colorText}
                    stroke-width=".03rem"
                    x={centerX}
                    y={centerY + 10}
                    text-anchor="middle"
                    dy="1.3rem"
                > objectif </text>
            </g>
        </svg>
    )
        
}
