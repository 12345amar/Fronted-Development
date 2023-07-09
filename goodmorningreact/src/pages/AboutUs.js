import React from 'react'
import Header from '../components/Header'
import { useParams, useLocation } from 'react-router-dom'

function AboutUs() {
  const myParams = useParams()
  const myInfo = useLocation()
  console.log("myParams", myInfo)
  const { name, city, age, state, country } = myInfo.state

  return (
    <><Header /><div>ABout Us</div>
    <p>Name: {name}</p>
    </>
  )
}

export default AboutUs