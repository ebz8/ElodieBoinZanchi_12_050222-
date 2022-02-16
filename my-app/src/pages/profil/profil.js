import './Profil.scss'

import HorizontalNav from '../../components/HorizontalNav/HorizontalNav.js'
import VerticalNav from '../../components/VerticalNav/VerticalNav.js'
import Dashboard from '../../components/Dashboard/Dashboard.js'

import { useParams } from 'react-router-dom'

export default function Profil() {
  // get the current User
  const params = useParams()
  const userId = params.id

   return (
    <>
      <HorizontalNav />
      <VerticalNav />
      <Dashboard userId={userId} />
    </>
  )
}