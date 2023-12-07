import React from 'react'

function StDashBoard() {
  return (
    <main>
       <div className='p-2'>
         <h1 className='font-bold text-4xl uppercase text-blue-700'>Student Dashboard</h1>
       </div>

      <div className='w-full flex gap-2 p-2'>
        <div className="flex-1 rounded-lg bg-blue-500 text-white h-[200px] border"></div>
        <div className="flex-1 rounded-lg bg-[#51c851] text-white h-[200px] border"></div>
        <div className="flex-1 rounded-lg bg-gray-500 text-white h-[200px] border"></div>
        <div className="flex-1 rounded-lg bg-purple-600/40 text-white h-[200px] border"></div>
    </div>
    </main>
  )
}

export default StDashBoard
