import React, { useRef, useEffect } from 'react'

function HooksRef() {
const divElement = useRef(null)
const inputElement = useRef(null)
console.log("divElement", divElement.current)
useEffect(() => {
    if (inputElement) {
        inputElement.current.focus()
    }
}, [inputElement])

const clickHandle = () => {
    divElement.current.style.color = "red" 
    divElement.current.innerHTML = 'Changed Div'
    inputElement.current.value = "change input field text"
    console.log('inputElement', inputElement.current.value)
}
  return (
    <><div ref={divElement}>HooksRef</div>
    <input type="text" ref={inputElement}/>
    <button type="button" onClick={clickHandle}>Click here</button></>

  )
}

export default HooksRef