import { useState } from 'react'
import './App.css'
import Resume from './components/Resume'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Resume />
    </div>
  )
}

export default App
