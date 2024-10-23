import React from 'react'
import { Outlet, Routes } from "react-router-dom";
import Navbar from './component/Navbar/Navbar'
import Home from './component/Home/Home'
import Footer from './component/footer/Footer'

function Root() {
  return (
    <>
    <Navbar/>
    <Outlet/> 
    <Footer/> 
    </>
  )
}

export default Root

