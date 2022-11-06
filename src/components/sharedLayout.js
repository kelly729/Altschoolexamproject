import React, { Children } from 'react'
import { Navbar } from './Navbar'
import { Outlet } from 'react-router'

export const SharedLayout = ({children}) => {
  return (
    <>
    <div>
        <Navbar/>  
    </div>
    <div>
        {children}
    </div>
    
    </>
  )
}
