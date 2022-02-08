import './Dashboard.scss'

// components
import UserHeader from '../UserHeader/UserHeader'
import BarChart from '../BarChart/BarChart'
import LineChart from '../LineChart/LineChart'
import RadarChart from '../RadarChart/RadarChart'
import RadialBarChart from '../RadialBarChart/RadialBarChart'
import InfoCard from '../InfoCard/InfoCard'


export default function Dashboard(props) {
  // general infos
  const user = props.currentUser
  // convert data into *
  const todayScore = user.todayScore * 100
  const userInfos = props.currentUser.userInfos
  const userActivity = props.userActivity
  const userAverageSessions = props.userAverageSessions
  const userPerformance = props.userPerformance

  return (
    <main className="dashboard">

      <UserHeader firstName={userInfos.firstName}/>
      
      <section className="user-stats-container">
        <div className="stats">
          <BarChart className="stats-item" />
          <LineChart className="stats-item" />
          <RadarChart className="stats-item" />
          <RadialBarChart className="stats-item" todayScore={todayScore}/>
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