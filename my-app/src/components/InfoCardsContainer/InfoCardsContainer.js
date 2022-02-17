import PropTypes from "prop-types"

import InfoCard from "../InfoCard/InfoCard"


export default function InfoCardsContainer({ userKeyData }) {

  return (
    <ul className="cards">
      <InfoCard
        color="red"
        type="Calories"
        keyData={userKeyData.calorieCount}
      />

      <InfoCard
        color="blue"
        type="Proteines"
        keyData={userKeyData.proteinCount}
      />

      <InfoCard
        color="yellow"
        type="Glucides"
        keyData={userKeyData.carbohydrateCount}
      />

      <InfoCard
        color="pink"
        type="Lipides"
        keyData={userKeyData.lipidCount}
      />
    </ul>
  )
}

InfoCardsContainer.propTypes = {
  userKeyData: PropTypes.object
}
