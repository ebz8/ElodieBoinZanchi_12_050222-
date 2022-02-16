import RadialBarChart from '../Charts/RadialBarChart/RadialBarChart'
import { getUserInfos } from "../../data/API/hooks/getUserInfos"

export default function RadialBarChartContainer({ userId }) {
    const { isLoaded, error, data } = getUserInfos(userId)

    return error ? <p>Erreur : {error}</p>
    : !isLoaded ? <p>Chargement</p>
    :
    <li className="stats-item radialbarchart-container">
        <h3>Score</h3>
        <RadialBarChart userScore={data.score} />
    </li> 
    
}
