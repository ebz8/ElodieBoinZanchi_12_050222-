import SpiderRadarChart from '../Charts/SpiderRadarChart/SpiderRadarChart'

export default function SpiderRadarChartContainer({userPerformance}) {
    
    return (
    <li className="stats-item spiderradarchart-container">
        <SpiderRadarChart userPerformance={userPerformance}/>
    </li>
    )
}
