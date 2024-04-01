import Home from './Components/Home'
import CreateTrouble from './Components/CreateTrouble'
import UpdateTrouble from './Components/UpdateTrouble'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/createTrouble' element={<CreateTrouble />} />
          <Route path='/updateTrouble/:id' element={<UpdateTrouble />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
