import { useState, useEffect } from 'react'
import './App.css'
import MenuLateral from './components/menu-lateral/MenuLateral'
import EditorSection from './components/editor-section/EditorSection'

function App() {

  

  return (
    <div className="editor">
      <MenuLateral></MenuLateral>
      {/* <EditorSection></EditorSection> */}
    </div>
  )
}

export default App
