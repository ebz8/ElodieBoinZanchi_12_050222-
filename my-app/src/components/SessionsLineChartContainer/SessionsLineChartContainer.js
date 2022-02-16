import SessionsLineChart from "../Charts/SessionsLineChart/SessionsLineChart"


export default function SessionsLineChartContainer({userAverageSessions}) {

    return (
    <li className="stats-item sessionslinechart-container"> 
        <h3>Durée moyenne des <br />sessions</h3>
        <SessionsLineChart averageSessions={userAverageSessions.sessions}/>
    </li>
    )
}
