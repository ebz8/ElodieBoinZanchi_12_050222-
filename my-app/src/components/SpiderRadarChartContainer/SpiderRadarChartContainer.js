import SpiderRadarChart from '../SpiderRadarChart/SpiderRadarChart'

/**
 * Spider Radar Chart's container
 * Takes user's performance to show user's stats
 * @param {Object} userPerformance current userPerformance from fetch data
 * @returns {reactElement}
 */
export default function SpiderRadarChartContainer({ userPerformance }) {
    
    return (
        <li className="stats-item spiderradarchart-container">
            <SpiderRadarChart userPerformance={userPerformance}/>
        </li>
    )
}
