import './Profil.scss'

import HorizontalNav from '../../components/HorizontalNav/HorizontalNav.js'
import VerticalNav from '../../components/VerticalNav/VerticalNav.js'
import Dashboard from '../../components/Dashboard/Dashboard.js'

import { useParams } from 'react-router-dom'

import { useFetchData } from '../../data/API/hooks/useFetchData'

export default function Profil() {
  // get the current User
  const params = useParams()
  const userId = params.id

  const { isLoaded, error,
    userInfos, userActivity, userPerformance, userAverageSessions } = useFetchData(userId)
  console.log(userInfos, userActivity, userPerformance, userAverageSessions)


  return error ? <p>Erreur : {error}</p>
  : !isLoaded ? <p>Chargement</p>
  :
    <>
      <HorizontalNav />
      <VerticalNav />
      <Dashboard   
        userId={userId}
        userInfos={userInfos}
        userActivity={userActivity}
        userPerformance={userPerformance}
        userAverageSessions={userAverageSessions}
      />
    </>
  
}