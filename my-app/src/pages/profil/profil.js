import './Profil.scss'

import HorizontalNav from '../../components/HorizontalNav/HorizontalNav.js'
import VerticalNav from '../../components/VerticalNav/VerticalNav.js'
import Dashboard from '../../components/Dashboard/Dashboard.js'

import { useParams } from 'react-router-dom'
import { getUserInfos } from '../../data/API/hooks/getUserInfos'

// mock datas
import user from '../../data/mockUser/12.json'
import userActivity from '../../data/mockUser/12/activity.json'
import userAverageSessions from '../../data/mockUser/12/average-sessions.json'
import userPerformance from '../../data/mockUser/12/performance.json'


export default function Profil() {

  const currentUser = user.data

   return (
    <>
      <HorizontalNav />
      <VerticalNav />
      <Dashboard
        currentUser={currentUser}
        userActivity={userActivity}
        userAverageSessions={userAverageSessions}
        userPerformance={userPerformance}
      />
    </>
  )
}