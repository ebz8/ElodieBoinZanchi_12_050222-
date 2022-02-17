import "./Dashboard.scss"

import PropTypes from 'prop-types'

import UserHeader from "../UserHeader/UserHeader"
import ChartsContainer from "../ChartsContainer/ChartsContainer"
import InfoCardsContainer from "../InfoCardsContainer/InfoCardsContainer"


/**
 * Component containing all current user's dashboard sections
 * @param {string} userId (props) current user id get with useParams from Profil
 * @param {object} userInfos (props) current user's infos from fetch
 * @param {object} userActivity (props) current user's activity from fetch
 * @param {object} userPerformance (props) current user's perfromance from fetch
 * @param {object} userAverageSessions (props) current user's average sessions from fetch
 * @returns {reactElement}
 */
function Dashboard({userId, userInfos, userActivity, userPerformance, userAverageSessions}) {

  return (
    <main className="dashboard">
      <UserHeader firstName={userInfos.firstName} />
      <section className="user-stats-container">
        <ChartsContainer
          userInfos={userInfos}
          userActivity={userActivity}
          userPerformance={userPerformance}
          userAverageSessions={userAverageSessions}
          userId={userId} 
        />
        <InfoCardsContainer userKeyData={userInfos.keyData}/>    
      </section>
    </main>
  )
}


Dashboard.propTypes = {
  userId: PropTypes.string,
  userInfos: PropTypes.object,
  userActivity: PropTypes.object,
  userPerformance: PropTypes.object,
  userAverageSessions: PropTypes.object,
}

export default Dashboard