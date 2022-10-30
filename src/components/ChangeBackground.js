import { useState } from "react"

const ChangeBackground = () => {
    const [color,setColor] = useState("")
    const changeColor = (e) => setColor(e.target.value) 
   
    return (
      <>
      <style>{'body {background-color:'+color+'}'}</style>
      <p>{color}</p>
        <form>
            <input type="color" onChange={changeColor}/>
        </form>
      </>
    )
  }

export default ChangeBackground