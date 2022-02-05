import './VerticalNav.scss'

import NavIcon from '../../components/NavIcon/NavIcon.js'

export default function VerticalNav() {
  return (
    <aside>
      <ul>
        <NavIcon />
        <NavIcon />
        <NavIcon />
        <NavIcon />
      </ul>
      
      <span>Copyright, SportSee {new Date().getFullYear()}</span>
    </aside>
  )
}