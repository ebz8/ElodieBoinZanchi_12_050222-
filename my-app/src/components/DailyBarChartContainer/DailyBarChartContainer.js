import DailyBarChart from "../DailyBarChart/DailyBarChart"

/**
 * Bar Chart's container
 * Takes user's activity to show daily infos about weight and calories burned
 * @param {Object} userActivity current UserActivity from fetch data
 * @returns {reactElement}
 */
export default function DailyBarChartContainer({ userActivity }) {

    return (
    <li className="stats-item dailybarchart-container">
        <h3>Activité quotidienne</h3>
        <DailyBarChart userActivity={userActivity}/>
    </li>
    )
}
