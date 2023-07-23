import React, { useEffect, useState } from 'react'

function HooksUseEffect() {
    const [myValue, setMyValue] = useState('use effet')
    const [isClick, setIsClick] = useState(false)
    const [counter, setCounter] = useState(0)

    // note: useEffect has asynchronouse behaviour
    // phase 1 mounting
    useEffect(() => {
        setMyValue('update use effect mounting')
        // console.log("use effect mounting")
        // api
        // logic
    }, [])
    // phase 2 updating
    useEffect(() => {
        if(isClick) {
            setMyValue(`update use effect updating phase ${isClick}`)
            // console.log("use effect updating")
            // api
            // logic
        }
    }, [isClick])
 
    // phase 3 unmounting
    useEffect(() => {
        let myCounter = counter
        
      const setTiming = setInterval(() => {
        myCounter = myCounter + 1
        setCounter(myCounter)
        // console.log("counter", counter)
      }, 1000)
      // console.log("unmounting use effect")
      // optional 
      // clear cache, settimeout, setInterval, session, local storage, logout and other things
      return () => {
        clearInterval(setTiming)
      }
    
    }, [])



    const handleClick = () => {
        setIsClick(!isClick)
    }
  return (
    <>
    <div>HooksUseEffect {myValue} </div>
    <p>Counter: {counter}</p>
    <button onClick={() => { handleClick() } } type="button">Button</button></>
  )
}

export default HooksUseEffect