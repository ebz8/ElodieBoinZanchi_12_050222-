import './NavIcon.scss'

import PropTypes from 'prop-types'

import { ReactComponent as MeditationIcon } from '../../assets/icons/meditation.svg'
import { ReactComponent as SwimIcon } from '../../assets/icons/swim.svg'
import { ReactComponent as CycleIcon } from '../../assets/icons/cycle.svg'
import { ReactComponent as BodybuildingIcon } from '../../assets/icons/bodybuilding.svg'

/**
 * Secondary nav in user's dashboard with icons
 * @param {string} icon link's corresponding icon
 * @returns {reactElement}
 */
function NavIcon({ icon }) {
  return (
    <li>
        {icon === 'meditation' &&
          <MeditationIcon className="navicon"/>
        }
        {icon === 'swim' &&
            <SwimIcon className="navicon"/>
        }
        {icon === 'cycle' &&
          <CycleIcon className="navicon"/>
        }
        {icon === 'bodybuilding' &&
          <BodybuildingIcon className="navicon"/>
        }
    </li>
    
  )
}

NavIcon.propTypes = {
  icon: PropTypes.string
}

export default NavIcon