import './Error404.scss'

import { Link } from "react-router-dom"

import HorizontalNav from '../HorizontalNav/HorizontalNav'
import VerticalNav from '../VerticalNav/VerticalNav'

export default function Error404() {
  // créer des messages spécifiques selon erreur d'url ou d'API
  // log l'erreur
  return (
    <>
      <HorizontalNav />
      <VerticalNav />
      <div className='error404'>
        <h2>Erreur 404</h2>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    </>
  )
}
