import React from 'react'

function ShowData({objectData, arrayData, variableData}) {
  return (
    <div>
        <p>Object - Name: {objectData.name} | School: {objectData.school} </p>
        <p>Array - {arrayData[0]}, {arrayData[1]}</p>
        <p>Variable - {variableData}</p>
    </div>
  )
}

export default ShowData