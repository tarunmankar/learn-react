import React, {useState} from 'react'

const ChangeText = () => {
  const [color, setColor] = useState("Red")
  const handleValue = () =>{ setColor("Blue")}
  
  return (
    <>
      <p>{color}</p>
      <button type="button" onClick={handleValue}>Blue</button>
      
      {/* <button
        type="button"
        onClick={handleValue}
        onClick={() => setColor("Blue")}
      >Blue</button> */}
    </>
  )
}

export default ChangeText