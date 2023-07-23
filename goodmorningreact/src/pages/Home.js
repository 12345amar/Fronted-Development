import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Profile from '../components/Profile'
import HooksUseEffect from '../components/HooksUseEffect'
import HooksRef from '../components/HooksRef'
import HooksUseReducer from '../components/HooksUseReducer'
import HooksMemoCallback from '../components/HooksMemoCallback'

function Home() {
  const redirect = useNavigate()

  const [myAddress, setAddress] = useState('')
  const [postalCode, setPostalCode] = useState(0)
  const [isAddress, setIsAddress] = useState(false)
  const [parentValue, setParentValue] = useState('parent use effect')
  
  // useEffect(() => {
  //   setParentValue("update parent value")
  //   console.log("parent use effect")
  // })
  const myInfo = {
    name: "amar",
    age: 30,
    city: 'Noida',
    state: "UP",
    country: "India"
  }
  
  const redirectHandle = () => {
    redirect('/about/2', {state: myInfo})
  }
  const myParentFunc = (params) => {
    

  }

  useEffect(() => {
    setAddress("Noida")
    setPostalCode(201002)
    setIsAddress(true)
  }, [])

  useEffect(() => {
    
    setPostalCode((prevValue) => {
      return prevValue + 12
    })
  }, [isAddress])


  return (
    <>
   
    
    {false && 
    <><><div>Home {parentValue}</div><div> My address: {myAddress}</div><div> My Postal Code: {postalCode}</div></><button type="button" onClick={() => { redirectHandle() } }>Go to about us</button><div className="profile-area">
          {/* <Profile myInfo={myInfo} setAddress={setAddress} myParentFunc={myParentFunc}/> */}
        </div><HooksUseEffect />
        <br />
    <HooksRef />
    
    <HooksUseReducer />

    
    </>
  }
   <HooksMemoCallback />

    </>
  )
}

export default Home