import { useState } from 'react'
import './App.css'
import BarraLateralMenu from './components/barra-lateral-menu/BarraLateralMenu'
import MenuLateral from './components/menu-lateral/MenuLateral'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="editor">
      <BarraLateralMenu></BarraLateralMenu>
      <MenuLateral></MenuLateral>
    </div>
  )
}

export default App
