import {Navbar} from "../src/components/index"
import { Outlet } from 'react-router'
import './App.css'

function App() {
  return(
    <div>
      <Navbar/>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default App
