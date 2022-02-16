import './UserHeader.scss'

export default function UserHeader({ firstName }) {
  const welcomeMsg = 'Félicitations ! Vous avez explosé vos objectifs hier 👏'

  return (
    <section className="user-header">
      <h1>Bonjour <strong>{firstName}</strong></h1>
      <p>{welcomeMsg}</p>
    </section>
  )
}
