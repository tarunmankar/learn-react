import React from 'react'

const PrintArrayList = () => {
  const data = ["Tarun","Ajay","Vijay","Sachin","Ramesh"]
  const listItems = data.map(item => {
      return <li>{item}</li>;
  })
  
  return (
    <>
      <ul>
        {listItems}
      </ul>
    </>
  )
}

export default PrintArrayList