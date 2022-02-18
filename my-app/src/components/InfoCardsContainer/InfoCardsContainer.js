import PropTypes from "prop-types"

import InfoCard from "../InfoCard/InfoCard"

/**
 * Info cards container
 * Takes current user's key data to show different cards with corresponding infos & style
 * @param {object} userKeyData userkey data from fetch
 * @returns {reactElement}
 */
function InfoCardsContainer({ userKeyData }) {

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

export default InfoCardsContainer