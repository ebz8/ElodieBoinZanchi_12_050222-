import './Dashboard.scss'

// components
import UserHeader from '../UserHeader/UserHeader'
import BarChart from '../BarChart/BarChart'
import LineChart from '../LineChart/LineChart'
import RadarChart from '../RadarChart/RadarChart'
import RadialBarChart from '../RadialBarChart/RadialBarChart'
import InfoCard from '../InfoCard/InfoCard'


export default function Dashboard() {
  return (
    <main>

      <UserHeader />
      
      <div className="user-stats-container">

        <div className="stats">
          <BarChart />
          <LineChart />
          <RadarChart />
          <RadialBarChart />
        </div>

        <div className="cards">
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
        </div>

      </div>
    </main>
  )
}