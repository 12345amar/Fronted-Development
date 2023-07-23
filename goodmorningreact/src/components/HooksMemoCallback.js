import React, { useState, useCallback } from 'react'

function HooksMemoCallback() {

    const [myArray, setMyArray] = useState([12,4, 5, 6, 7,34,12,43, 78, 6,7])
    const [myRandomNumber, setMyRandomNumber] = useState(0)
    const [mySum, setMySum] = useState(0)
    const sum = () => {
        console.log("run my sum expensive calculation")
        return myArray.reduce((acc, value) => {
            return acc + value
        }, 0)
    }
    const sumMemoise = useCallback(() => {
        setMySum(sum())
    }, [myArray])
    
    const clickHandler = () => {
        const myNewNumer = Math.random().toFixed(2) * 100
        console.log('==myNewNumer', myNewNumer)
        setMyArray([...myArray, myNewNumer])
    }

    const generateRandomNumber = () => {
        const myNewNumer = Math.random().toFixed(2) * 1000
        setMyRandomNumber(myNewNumer)
    }
   
  return (
    <>
        <div>HooksMemoCallback</div>
        <div> My Array Sum: {mySum}</div>
        <button type="button" onClick={sumMemoise}>Click Here</button>
        <button type="button" onClick={clickHandler}>Add New Value in Array</button>
        <p>My Random Value: {myRandomNumber}</p>
        <button type="button" onClick={generateRandomNumber}>Generate Random Number</button>
    </>
  )
}

export default HooksMemoCallback