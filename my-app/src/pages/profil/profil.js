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

  const { isLoaded, userInfos, userActivity, userPerformance, error} = useFetchData(userId)
  console.log(userInfos, userActivity, userPerformance)

  // ici faire un appel global des fetch avant de charger la page ?

   return (
    <>
      <HorizontalNav />
      <VerticalNav />
      <Dashboard userId={userId} />
    </>
  )
}