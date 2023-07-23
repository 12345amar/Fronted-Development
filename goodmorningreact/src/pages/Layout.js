import React from 'react'
import Header from './../components/Header'
import Footer from './../components/Footer'
import {Outlet} from 'react-router-dom'

function Layout() {
  return (
    <>
    <div id="header">
        <Header />
    </div>
    <div id="dashboard-layout">
        <Outlet />
    </div>
    <div id="header">
        <Footer />
    </div>
  </>
  )
}

export default Layout