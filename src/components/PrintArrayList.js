import React from 'react'

const PrintArrayList = () => {
  const data = ["Tarun","Ajay","Vijay","Sachin","Ramesh"]
  
  return (
    <>
      <ul>
        {data.map(item => {
          return <li>{item}</li>;
        })}
      </ul>
    </>
  )
}

export default PrintArrayList