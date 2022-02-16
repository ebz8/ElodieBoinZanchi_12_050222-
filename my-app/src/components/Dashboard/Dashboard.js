import "./Dashboard.scss"

// components
import UserHeader from "../UserHeader/UserHeader"
import ChartsContainer from "../ChartsContainer/ChartsContainer"
import InfoCardsContainer from "../InfoCardsContainer/InfoCardsContainer"

import { getUserInfos } from "../../data/API/hooks/getUserInfos"

export default function Dashboard({userId, userInfos, userActivity, userPerformance, userAverageSessions}) {

  const { isLoaded, error, data } = getUserInfos(userId)
  
  return error ? <p>Erreur : {error}</p>
      : !isLoaded ? <p>Chargement</p>
      : 
    <main className="dashboard">
      <UserHeader firstName={data?.firstName} />
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
  
}
