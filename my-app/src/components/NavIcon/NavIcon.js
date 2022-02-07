import './NavIcon.scss'

import { ReactComponent as MeditationIcon } from '../../assets/icons/meditation.svg'
import { ReactComponent as SwimIcon } from '../../assets/icons/swim.svg'
import { ReactComponent as CycleIcon } from '../../assets/icons/cycle.svg'
import { ReactComponent as BodybuildingIcon } from '../../assets/icons/bodybuilding.svg'

export default function NavIcon(props) {
  return (
    <li>
        {props.icon === 'meditation' &&
          <MeditationIcon className="navicon"/>
        }
        {props.icon === 'swim' &&
            <SwimIcon className="navicon"/>
        }
        {props.icon === 'cycle' &&
          <CycleIcon className="navicon"/>
        }
        {props.icon === 'bodybuilding' &&
          <BodybuildingIcon className="navicon"/>
        }
    </li>
    
  )
}