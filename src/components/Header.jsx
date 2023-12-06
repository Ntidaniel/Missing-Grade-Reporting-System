import React, { useState } from 'react'

function Header() {
 const [clicked,setclicked] = useState(false)

 const animate = () => {
    setclicked(true)

    setTimeout(() => {
        setclicked((prev) => {
            return !prev
        })
    },1000)
 }

  return (
    <div className='w-full border p-4 flex justify-between items-center'>
      <div>
          <input type="text" placeholder='search ' className='border p-2 px-4'/>
      </div>

      <div className='flex justify-center items-center gap-1'>
        <div className={'w-[30px] h-[30px] bg-gray-600 rounded-full ' + (clicked? "animate-ping" : "animate-none")} onClick={animate}></div>
        <div className={'w-[30px] h-[30px] bg-gray-600 rounded-full ' + (clicked? "animate-ping" : "animate-none")} onClick={animate}></div>
        <div className={'w-[30px] h-[30px] bg-gray-600 rounded-full ' + (clicked? "animate-ping" : "animate-none")} onClick={animate}></div>
      </div>
    </div>
  )
}

export default Header
