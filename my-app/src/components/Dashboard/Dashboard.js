import "./Dashboard.scss"

import PropTypes from 'prop-types'

// components
import UserHeader from "../UserHeader/UserHeader"
import ChartsContainer from "../ChartsContainer/ChartsContainer"
import InfoCardsContainer from "../InfoCardsContainer/InfoCardsContainer"

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