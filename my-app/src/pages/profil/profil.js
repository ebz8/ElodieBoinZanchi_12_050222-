import './Profil.scss'

import HorizontalNav from '../../components/HorizontalNav/HorizontalNav.js'
import VerticalNav from '../../components/VerticalNav/VerticalNav.js'
import Dashboard from '../../components/Dashboard/Dashboard.js'

import { useParams } from 'react-router-dom'

// mock datas
import userActivity from '../../data/mockUser/12/activity.json'
import userAverageSessions from '../../data/mockUser/12/average-sessions.json'
import userPerformance from '../../data/mockUser/12/performance.json'


export default function Profil() {
  // get the current User
  const params = useParams()
  const userId = params.id

   return (
    <>
      <HorizontalNav />
      <VerticalNav />
      <Dashboard
        userId={userId}
        userActivity={userActivity}
        userAverageSessions={userAverageSessions}
        userPerformance={userPerformance}
      />
    </>
  )
}