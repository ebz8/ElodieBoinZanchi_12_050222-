import DailyBarChart from "../Charts/DailyBarChart/DailyBarChart"
import { getUserActivity } from "../../data/API/hooks/getUserActivity"

export default function DailyBarChartContainer({userId}) {
    const { isLoaded, error, data } = getUserActivity(userId)
  
    return error ? <p>Erreur : {error}</p>
    : !isLoaded ? <p>Chargement</p>
    :
    <li className="stats-item dailybarchart-container">
        <h3>Activité quotidienne</h3>
        <DailyBarChart userId={userId} userActivity={data}/>
    </li>
  
}
