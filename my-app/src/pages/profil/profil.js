import './Profil.scss'

import { useParams } from 'react-router-dom'
import { useFetchData } from '../../data/API/hooks/useFetchData'

import HorizontalNav from '../../components/HorizontalNav/HorizontalNav.js'
import VerticalNav from '../../components/VerticalNav/VerticalNav.js'
import Dashboard from '../../components/Dashboard/Dashboard.js'


export default function Profil() {
  // get the current User
  const params = useParams()
  const userId = params.id
  // fetch data
  const {
    isLoaded,
    error,
    userInfos,
    userActivity,
    userPerformance,
    userAverageSessions
  } = useFetchData(userId)

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