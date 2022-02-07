export default function UserHeader(props) {
  const welcomeMsg = 'Félicitations ! Vous avez explosé vos objectifs hier 👏'

  return (
    <section className="user-header">
      <h1>Bonjour {props.firstName}</h1>
      <p>{welcomeMsg}</p>
    </section>
  )
}
