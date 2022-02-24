import './Home.scss'

import HorizontalNav from '../../components/HorizontalNav/HorizontalNav'
import VerticalNav from '../../components/VerticalNav/VerticalNav'

import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <HorizontalNav />
      <VerticalNav />
      {/* fake navigation just for testing */}
      <main className="testnavigation">
        <NavLink to="/user/12">User 12</NavLink>
        <NavLink to="/user/18">User 18</NavLink>
        <NavLink to="/user/28">User 28</NavLink>
      </main>
    </>
  )
}
