import RadialBarChart from '../Charts/RadialBarChart/RadialBarChart'

export default function RadialBarChartContainer({ userInfos }) {

    return (
        <li className="stats-item radialbarchart-container">
            <h3>Score</h3>
            <RadialBarChart userScore={userInfos.score} />
        </li> 
    )
}