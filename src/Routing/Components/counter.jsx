import React, { useState } from 'react'

function counter() {
    const [count,setCount] = useState(0)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Click</button>
    </div>
  )
}

export default counter