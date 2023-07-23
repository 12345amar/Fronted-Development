import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

function Layout() {
  return (
    <>
        <div id="header">
            <Header />
        </div>
        <div id="layout">
            <Outlet />
        </div>
        <div id="footer">
            <Footer />
        </div>
    </>
  )
}

export default Layout