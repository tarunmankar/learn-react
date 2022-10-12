import React, {useState} from 'react'

const ChangeInput = () => {
    const [name, setName] = useState("tarun")
    const handleValue = (e) =>{setName(e.target.value)}

    return(
        <>
            <h1>{name}</h1>
            <input type="text" onChange={handleValue} />

            {/* <input
                type="text"
                onChange={handleValue}
                onChange={(e) => setName(e.target.value)}
            /> */}
        </>
    )
}

export default ChangeInput