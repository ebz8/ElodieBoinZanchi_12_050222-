'./InfoCardsContainer.scss'

import InfoCard from "../InfoCard/InfoCard"

export default function InfoCardsContainer({ userKeyData }) {
  return (
    <ul className="cards">
    {/* passer les li dans les composants ? */}
          <li>
            <InfoCard
              color="red"
              type="Calories"
              keyData={userKeyData.calorieCount}
            />
          </li>
          <li>
            <InfoCard
              color="blue"
              type="Proteines"
              keyData={userKeyData.proteinCount}

              />
          </li>
          <li>
            <InfoCard
              color="yellow"
              type="Glucides"
              keyData={userKeyData.carbohydrateCount} />
          </li>
          <li>
            <InfoCard
              color="pink"
              type="Lipides"
              keyData={userKeyData.lipidCount} />
          </li>
        </ul>
  )
}
