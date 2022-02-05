import './HorizontalNav.scss'
import { ReactComponent as Logo } from '../../assets/img/logo.svg'

import { useParams, Link, NavLink } from 'react-router-dom'

export default function HorizontalNav() {
  const currentUserDashboard = useParams()

  return (
    <header>
      <Link to={currentUserDashboard}>
        <Logo alt="SportSee" className="logo"/>
      </Link>

      <nav>
        <ul className="navigation">
          <li>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/">Profil</NavLink>
            <NavLink to="/">Réglages</NavLink>
            <NavLink to="/">Communauté</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
