import "./Dashboard.scss"

// components
import UserHeader from "../UserHeader/UserHeader"
import ChartsContainer from "../ChartsContainer/ChartsContainer"
import InfoCardsContainer from "../InfoCardsContainer/InfoCardsContainer"

export default function Dashboard(props) {

  const user = props.currentUser
  const userKeyData = user.keyData
  const userInfos = props.currentUser.userInfos

  return (
    <main className="dashboard">
      <UserHeader firstName={userInfos.firstName} />
      <section className="user-stats-container">
        <ChartsContainer user={user} userData={props}/>
        <InfoCardsContainer userKeyData={userKeyData}/>    
      </section>
    </main>
  )
}
