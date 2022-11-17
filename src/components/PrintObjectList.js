import React from 'react'

const PrintObjectList = () => {
    const data = { name:"Tarun", age: 27, gender: "male"}
    return (
      <>
        <table border={1}>
          <tbody>
            <tr><td><b>Name</b> </td><td> {data.name} </td></tr>
            <tr><td><b>Age</b> </td><td> {data.age} </td></tr>
            <tr><td><b>Gender</b></td><td>{data.gender} </td></tr>
          </tbody>
        </table>
      </>
  )
}

export default PrintObjectList