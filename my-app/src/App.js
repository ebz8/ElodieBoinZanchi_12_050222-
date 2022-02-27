import './App.scss'
import { Routes, Route } from "react-router-dom"

import Home from './pages/Home/Home'
import Profil from './pages/Profil/Profil'
import Error404 from './components/Error404/Error404'


function App() {

  return (
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path="/user/:id" element={<Profil />}/>
          <Route path="/*" element={<Error404 />}/>
        </Routes>
      </div>
  )
}

export default App