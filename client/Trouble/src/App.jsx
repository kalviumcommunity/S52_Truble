import Home from './Components/Home'
import CreateTrouble from './Components/CreateTrouble'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/createTrouble' element={<CreateTrouble />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
