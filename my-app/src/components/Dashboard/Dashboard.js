import "./Dashboard.scss"

// components
import UserHeader from "../UserHeader/UserHeader"
import ChartsContainer from "../ChartsContainer/ChartsContainer"
import InfoCardsContainer from "../InfoCardsContainer/InfoCardsContainer"

export default function Dashboard({userId, userInfos, userActivity, userPerformance, userAverageSessions}) {

  return (
    <main className="dashboard">
      <UserHeader firstName={userInfos.firstName} />
      <section className="user-stats-container">
        <ChartsContainer
          userInfos={userInfos}
          userActivity={userActivity}
          userPerformance={userPerformance}
          userAverageSessions={userAverageSessions}
          userId={userId} 
        />
        <InfoCardsContainer userKeyData={userInfos.keyData}/>    
      </section>
    </main>
  )
}
