import "./Dashboard.scss"

// components
import UserHeader from "../UserHeader/UserHeader"
import ChartsContainer from "../ChartsContainer/ChartsContainer"
import InfoCardsContainer from "../InfoCardsContainer/InfoCardsContainer"

import { getUserInfos } from "../../data/API/hooks/getUserInfos"

export default function Dashboard({userId}) {

  const { isLoaded, error, data } = getUserInfos(userId)
  
  return error ? <p>Erreur : {error}</p>
      : !isLoaded ? <p>Chargement</p>
      : 
    <main className="dashboard">
      <UserHeader firstName={data?.firstName} />
      <section className="user-stats-container">
        <ChartsContainer userId={userId}/>
        <InfoCardsContainer userKeyData={data?.keyData}/>    
      </section>
    </main>
  
}
