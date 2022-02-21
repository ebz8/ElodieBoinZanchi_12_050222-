import RadialChart from '../RadialBarChart/RadialBarChart'

/**
 * Radial Bar Chart's container
 * Takes user's score from his general infos to shows % score and a progress bar.
 * @param {Object} userInfos current user's infos from fetch data
 * @returns {reactElement}
 */
export default function RadialBarChartContainer({ userInfos }) {

    return (
        <li className="stats-item radialbarchart-container">
            <h3>Score</h3>
            <RadialChart userScore={userInfos.score} />
        </li> 
    )
}