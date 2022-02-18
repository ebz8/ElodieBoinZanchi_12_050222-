import SessionsLineChart from "../SessionsLineChart/SessionsLineChart"

/**
 * Sessions Line Chart's container
 * Takes user's average sessions data to show a line chart with average session duration
 * @param {Object} userAverageSessions current user's average sessions from fetch data
 * @returns {reactElement}
 */
export default function SessionsLineChartContainer({ userAverageSessions }) {

    return (
        <li className="stats-item sessionslinechart-container"> 
            <h3>Durée moyenne des <br />sessions</h3>
            <SessionsLineChart averageSessions={userAverageSessions.sessions}/>
        </li>
    )
}
