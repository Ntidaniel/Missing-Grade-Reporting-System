import React from 'react'
import { useState } from 'react'

function LSideBar() {
    const [collapsed,setCollapsed] = useState(true)
  return (
    <div className={(collapsed? 'w-[60px] ' : "w-[300px] ") + "border-4  h-screen duration-300"}>
        <button onClick={() => setCollapsed(!collapsed)}>col</button>
    </div>
  )
}

export default LSideBar
