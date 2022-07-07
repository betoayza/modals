import { useState } from 'react'
import { Modals } from './components/Modals'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Modals />
    </div>
  )
}

export default App
