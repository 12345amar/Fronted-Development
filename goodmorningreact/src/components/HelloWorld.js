import React, { useState, useEffect } from 'react'
const HelloWorld = (props) => {
    const [name, setName] = useState('Singh')
    const [counter, setCounter] = useState(0)
    const [userList, setUserList] = useState({

    })
    
    // phase 1 mounting ==>
    useEffect(() => {
        console.log("mounting")
        setName("Raj")
    }, [])

    // phase 2 updating
     useEffect(() => {
        console.log("updating")
     }, [name])

     
    // phase 3 unmounting
    useEffect(() => {
        console.log("unmounting")
        return () => {
           return true 
        }
    })
    const clickHandle = () => { 
        setCounter(counter + 1)
    }
    return (
        <div>
            <h1>My First React Project</h1>
            <p>Parent Name: {props.name}</p>
            <p>State Name: {name}</p>
            <p>Counter: {counter}</p>
            <button type="button" onClick={clickHandle}>Increment</button>
        </div>
    )
}

export default HelloWorld