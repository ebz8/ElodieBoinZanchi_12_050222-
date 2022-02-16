import SpiderRadarChart from '../Charts/RadarChart/SpiderRadarChart'
import { getUserPerformance } from '../../data/API/hooks/getUserPerformance'

export default function SpiderRadarChartContainer({userId}) {
    const { isLoaded, error, data } = getUserPerformance(userId)
    
    return error ? <p>Erreur : {error}</p>
    : !isLoaded ? <p>Chargement</p>
    :
    <li className="stats-item spiderradarchart-container">
        <SpiderRadarChart userPerformances={data}/>
    </li>
}
