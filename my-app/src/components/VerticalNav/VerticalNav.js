import './VerticalNav.scss'


import NavIcon from '../../components/NavIcon/NavIcon.js'

export default function VerticalNav() {
  return (
    <aside className="vertical-nav">
      <ul className="navigation">
        <NavIcon icon="meditation"/>
        <NavIcon icon="swim"/>
        <NavIcon icon="cycle"/>
        <NavIcon icon="bodybuilding"/>
      </ul>
      
      <p>Copyright, SportSee {new Date().getFullYear()}</p>
    </aside>
  )
}