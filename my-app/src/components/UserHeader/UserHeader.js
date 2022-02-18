import './UserHeader.scss'

import PropTypes from 'prop-types'

/**
 * Dashboard's header with welcome message and user's name
 * @param {string} firstName user's first name from fetch data
 * @returns {reactElement}
 */
function UserHeader({ firstName }) {

  const welcomeMsg = 'Félicitations ! Vous avez explosé vos objectifs hier 👏'
  
  return (
    <section className="user-header">
      <h1>Bonjour <strong>{firstName}</strong></h1>
      <p>{welcomeMsg}</p>
    </section>
  )
}

UserHeader.propTypes = {
  firstName: PropTypes.string
}

export default UserHeader
