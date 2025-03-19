import React from 'react'
import HomePage from './HomePage/HomePage'
import { Outlet } from 'react-router-dom'

const DisplayAfterLogin = () => {
  return (
   <Outlet/>
  )
}

export default DisplayAfterLogin