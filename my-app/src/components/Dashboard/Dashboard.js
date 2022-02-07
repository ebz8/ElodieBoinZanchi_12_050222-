import './Dashboard.scss'

// components
import UserHeader from '../UserHeader/UserHeader'
import BarChart from '../BarChart/BarChart'
import LineChart from '../LineChart/LineChart'
import RadarChart from '../RadarChart/RadarChart'
import RadialBarChart from '../RadialBarChart/RadialBarChart'
import InfoCard from '../InfoCard/InfoCard'


export default function Dashboard(props) {
  const userInfos = props.currentUser.userInfos
  return (
    <main className="dashboard">

      <UserHeader firstName={userInfos.firstName}/>
      
      <section className="user-stats-container">
        <div className="stats">
          <BarChart className="stats-item" />
          <LineChart className="stats-item" />
          <RadarChart className="stats-item" />
          <RadialBarChart className="stats-item" />
        </div>

        <div className="cards">
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
        </div>
      </section>
    </main>
  )
}