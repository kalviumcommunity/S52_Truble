import Home from './Components/Home'
import CreateTrouble from './Components/CreateTrouble'
import UpdateTrouble from './Components/UpdateTrouble'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Signup from "./Components/Signup"
import Login from "./Components/Login"
import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/createTrouble' element={<CreateTrouble />} />
          <Route path='/updateTrouble/:id' element={<UpdateTrouble />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
