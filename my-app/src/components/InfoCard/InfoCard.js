import './InfoCard.scss'

import PropTypes from 'prop-types'

import { ReactComponent as FireIcon } from '../../assets/icons/energy.svg'
import { ReactComponent as ChickenIcon } from '../../assets/icons/chicken.svg'
import { ReactComponent as AppleIcon } from '../../assets/icons/apple.svg'
import { ReactComponent as BurgerIcon } from '../../assets/icons/cheeseburger.svg'

/**
 * Card component for one key data with conditionnal rendering
 * @param {number} keyData current key from fetch data
 * @param {string} type to render the good icon (calories, proteines, glucides ou lipides)
 * @param {string} color to chose main element's color
 * @returns {reactElement}
 */
export default function InfoCard({ keyData, type, color }) {
  //// format key to match figma mockup ////
  const formatdKeyData = new Intl.NumberFormat('en-GB').format(keyData)
 
  return (
    <li className={`infocard`}>
      <div className={`infocard-icon ${color}`}>
        { type === "Calories" && <FireIcon /> }
        { type === "Proteines" && <ChickenIcon /> }
        { type === "Glucides" && <AppleIcon /> }
        { type === "Lipides" && <BurgerIcon /> }
      </div>
      <div className="infocard-data">
        <p>{formatdKeyData}{type === "Calories" ? "kCal" : "g" }</p>
        <p>{type}</p>
      </div>
    </li>
  )
}

InfoCard.propTypes = {
  keyData: PropTypes.number,
  type: PropTypes.string,
  color: PropTypes.string
}
