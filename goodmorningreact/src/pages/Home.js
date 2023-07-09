import React, { useState } from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import Profile from '../components/Profile'

function Home() {
  const redirect = useNavigate()
  const [myAddress, setAddress] = useState('')

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
console.log('myAddress', myAddress)
  return (
    <>
    <Header />
    <div>Home</div>
    <button type="button" onClick={()=>{redirectHandle()}} >Go to about us</button>
    <div className="profile-area">
      <Profile myInfo={myInfo} />
    </div>
    </>
  )
}

export default Home