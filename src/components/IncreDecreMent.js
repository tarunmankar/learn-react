import React from 'react'
import { useState } from 'react'

const IncreDecreMent = () => {
  const [count, setCount]=useState(0)
  const increment = () => setCount(count+1)
  const decrement = () => setCount(count-1)
  return (
    <>
        <h1>{count}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
    </>
  )
}

export default IncreDecreMent