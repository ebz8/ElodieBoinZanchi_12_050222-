import DailyBarChart from "../Charts/DailyBarChart/DailyBarChart"

export default function DailyBarChartContainer({userActivity}) {

    return (
    <li className="stats-item dailybarchart-container">
        <h3>Activité quotidienne</h3>
        <DailyBarChart userActivity={userActivity}/>
    </li>
    )
}
