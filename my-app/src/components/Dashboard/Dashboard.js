import "./Dashboard.scss"

// components
import UserHeader from "../UserHeader/UserHeader"
import BarChart from "../Charts/BarChart/BarChart"
import SessionsLineChart from "../Charts/SessionsLineChart/SessionsLineChart"
import SpiderRadarChart from "../Charts/RadarChart/SpiderRadarChart"
import RadialBarChart from "../Charts/RadialBarChart/RadialBarChart"
import InfoCard from "../InfoCard/InfoCard"

export default function Dashboard(props) {
  // general infos
  const user = props.currentUser
  // convert data into *
  const todayScore = user.todayScore * 100
  const userKeyData = user.keyData
  const userInfos = props.currentUser.userInfos
  const userActivity = props.userActivity
  const userAverageSessions = props.userAverageSessions
  const userPerformance = props.userPerformance

  return (
    <main className="dashboard">
      <UserHeader firstName={userInfos.firstName} />
      {/* remplacer par composant Charts  */}
      <section className="user-stats-container">
        <ul className="stats">
          <li className="stats-item"><BarChart /></li>
          <li className="stats-item"><SessionsLineChart userAverageSessions={userAverageSessions}/></li>
          <li className="stats-item"><SpiderRadarChart userPerformance={userPerformance}/></li>
          <li className="stats-item"><RadialBarChart todayScore={todayScore} /></li> 
        </ul>

        {/* remplacer par composant Cards  */}
        <ul className="cards">
          <li>
            <InfoCard
              color="red"
              type="Calories"
              keyData={userKeyData.calorieCount}
            />
          </li>
          <li>
            <InfoCard
              color="blue"
              type="Proteines"
              keyData={userKeyData.proteinCount}

              />
          </li>
          <li>
            <InfoCard
              color="yellow"
              type="Glucides"
              keyData={userKeyData.carbohydrateCount} />
          </li>
          <li>
            <InfoCard
              color="pink"
              type="Lipides"
              keyData={userKeyData.lipidCount} />
          </li>
        </ul>
      </section>
    </main>
  )
}
