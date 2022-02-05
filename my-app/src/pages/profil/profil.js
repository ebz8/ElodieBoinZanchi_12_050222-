import './Profil.scss'

import HorizontalNav from '../../components/HorizontalNav/HorizontalNav.js'
import VerticalNav from '../../components/VerticalNav/VerticalNav.js'
import Dashboard from '../../components/Dashboard/Dashboard.js'


export default function Profil() {
  return (
    <>
      <HorizontalNav />
      <VerticalNav />
      <Dashboard />
    </>
  )
}