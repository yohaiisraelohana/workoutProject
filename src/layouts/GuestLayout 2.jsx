import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const GuestLayout = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default GuestLayout