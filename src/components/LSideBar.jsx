import React from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

function LSideBar() {
    const [collapsed,setCollapsed] = useState(false)
  return (
    <div className={(collapsed? 'w-[100px] ' : "w-[300px] ") + "h-screen duration-300 flex flex-col items-center shadow-md sticky top-0"}>
        <button className={'w-full border p-4 flex items-center text-blue-950 ' + (collapsed? "justify-center" : "justify-between")} onClick={() => setCollapsed(!collapsed)}>
            {!collapsed && <span className='text-xl font-bold'>PORTAL</span>}
           { collapsed? <MenuIcon fontSize='large'/> : <ArrowBackOutlinedIcon fontSize='medium'/>}
        </button>

        <div className='w-full p-1'>
            {!collapsed && <div className='flex flex-col justify-center items-center p-2 text-blue-950'>
                <span className='text-gray-500'>Student</span>
                <h1 className='text-xl'>Ampah Kuuku</h1>
            </div>}
            {collapsed && <p className='text-center text-2xl font-bold'>-</p>}

            <div className='w-full flex flex-col gap-2 mt-5 text-blue-950 text-lg links'>
                <NavLink to='/dashboard' className={'flex items-center gap-2 p-2 ' + (collapsed? "justify-center" : "")} >
                    <DashboardOutlinedIcon fontSize="medium"/>
                    {!collapsed && <span>Student Dashboard </span>}
                </NavLink>
                <NavLink to='/courses' className={'flex items-center gap-2 p-2 ' + (collapsed? "justify-center" : "")} >
                    <MenuBookOutlinedIcon fontSize="medium" />
                    {!collapsed && <span>Courses </span>}
                </NavLink>
                <NavLink to='' className={'flex items-center gap-2 p-2 ' + (collapsed? "justify-center" : "")} >
                    <PersonIcon fontSize="medium" />
                    {!collapsed && <span>Profile</span>}
                </NavLink>
                <NavLink to='' className={'flex items-center gap-2 p-2 ' + (collapsed? "justify-center" : "")} >
                    <LogoutIcon fontSize="medium" />
                    {!collapsed && <span>Logout</span>}
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default LSideBar
