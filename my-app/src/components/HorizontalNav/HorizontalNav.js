import './HorizontalNav.scss'
import { ReactComponent as Logo } from '../../assets/img/logo.svg'

import { Link, NavLink } from 'react-router-dom'

export default function HorizontalNav(props) {

  return (
    <header className="horizontal-nav">
      <Link to={`/`}>
        <Logo alt="SportSee" className="logo"/>
      </Link>

      <nav className="navigation-container">
        <ul className="navigation">
          <li>
            <NavLink to={`/user/${props.userId}/`}>Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/">Profil</NavLink>
          </li>
          <li>
            <NavLink to="/">Réglages</NavLink>
          </li>
          <li>
            <NavLink to="/">Communauté</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
