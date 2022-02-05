import './App.scss'
import { Routes, Route } from "react-router-dom"

// composants page
import Home from './pages/Home/Home'
import Profil from './pages/Profil/Profil'

function App() {

  return (
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path="/user/:id" element={<Profil />}/>
          {/* <Route path="/*" element={<Error404 />}/> */}
        </Routes>
      </div>
  )
}

export default App