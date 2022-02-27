import './HorizontalNav.scss'
import { ReactComponent as Logo } from '../../assets/img/logo.svg'

import PropTypes from 'prop-types'

import { Link, NavLink } from 'react-router-dom'

/**
 * Header's navbar
 * @param {string} userId 
 * @returns {reactElement}
 */
function HorizontalNav({ userId }) {

  return (
    <header className="horizontal-nav">
      <Link to={`/`}>
        <Logo alt="SportSee" className="logo"/>
      </Link>

      <nav className="navigation-container">
        <ul className="navigation">
          <li>
            <NavLink to={`/user/${userId}/`}>Accueil</NavLink>
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

HorizontalNav.propTypes = {
  userId: PropTypes.string,
}

export default HorizontalNav