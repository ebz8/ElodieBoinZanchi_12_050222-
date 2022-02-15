import "./Dashboard.scss"

import { useState, useEffect } from "react"


// components
import UserHeader from "../UserHeader/UserHeader"
import ChartsContainer from "../ChartsContainer/ChartsContainer"
import InfoCardsContainer from "../InfoCardsContainer/InfoCardsContainer"

import { useParams } from 'react-router-dom'
import { getUserInfos } from "../../data/API/hooks/getUserInfos"

export default function Dashboard(props) {
  // const { userId } = useParams()
  const params = useParams()
  const userId = params.id
  const { isLoaded, error, data } = getUserInfos(userId)

  
  return error ? <p>Erreur : {error}</p>
      : !isLoaded ? <p>Chargement</p>
      : 
    <main className="dashboard">
      <UserHeader firstName={data?.firstName} />
      <section className="user-stats-container">
        <ChartsContainer user={data} userData={props}/>
        <InfoCardsContainer userKeyData={data?.keyData}/>    
      </section>
    </main>
  
}
