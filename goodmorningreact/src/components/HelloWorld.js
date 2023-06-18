import React, { useState } from 'react'
const HelloWorld = (props) => {
    const [counter, setCounter] = useState(0)
    const  {name='', age=0, myDetails={}} = props
    const handleClick = (event) => {
        const updateCounter = counter + 1
        setCounter(updateCounter)
        console.log("state update")
    }
    return (
        <div>
             { console.log("ui render") }
            <h1>My First React Project</h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Counter: {counter}</p>
            <button type="button" onClick={(event) => handleClick(event) }>Counter Click</button>
        </div>
    )
}

export default HelloWorld