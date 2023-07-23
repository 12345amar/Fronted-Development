import React from 'react'
import Header from '../components/Header'
import { useParams, useLocation } from 'react-router-dom'

function AboutUs() {
  const myParams = useParams()
  const myInfo = useLocation()
  console.log("myParams", myInfo)


  return (
    <><div>ABout Us</div>
  
    </>
  )
}

export default AboutUs