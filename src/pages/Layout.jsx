import React from 'react'
import { Outlet } from 'react-router-dom'
import LSideBar from '../components/LSideBar'
import Header from '../components/Header'

function Layout() {
  return (
    <div className='flex'>
      <LSideBar />
      <div className='w-full'>
        <Header />
        <div className='p-4'>
         <Outlet />
        </div>
      </div> 
    </div>
  )
}

export default Layout
