import { useState } from 'react'
import './App.css'
import { MainScreen } from './Pages/MainScreen/MainScreen'
//Components Import

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <MainScreen /> 
    </div>
  )
}

export default App
