import SessionsLineChart from "../Charts/SessionsLineChart/SessionsLineChart"
import { getUserAverageSessions } from "../../data/API/hooks/getUserAverageSessions"


export default function SessionsLineChartContainer({userId}) {
    const { isLoaded, error, data } = getUserAverageSessions(userId)

    return error ? <p>Erreur : {error}</p>
    : !isLoaded ? <p>Chargement</p>
    :
    <li className="stats-item sessionslinechart-container"> 
        <h3>Durée moyenne des <br />sessions</h3>
        <SessionsLineChart userId={userId} averageSessions={data.sessions}/>
    </li>
  
}
