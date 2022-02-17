import './UserHeader.scss'

import PropTypes from 'prop-types'

export default function UserHeader({ firstName }) {

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
