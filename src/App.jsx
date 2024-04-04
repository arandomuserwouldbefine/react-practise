import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h5>Counter :{count}</h5>
      <button onClick={()=>setCount(count+1)}>Click</button>

    </>
  )
}

export default App
