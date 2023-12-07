import React from 'react'
import { data1 } from '../data/data'

function Courses() {
  return (
    <table className='w-full rounded-xl border-2 shadow-md overflow-hidden'>
        <tr className='text-blue-950'>
            <td> </td>
            <td className='font-bold text-lg p-4'>Course Code</td>
            <td className='font-bold text-lg p-4'>Course Name</td>
            <td className='font-bold text-lg p-4'>Year</td>
        </tr>
      {
         data1.map((data, index) => (
            <tr key={index} className='font-medium hover:bg-[#00000002]'>
                <td className='border p-2'><input type="checkbox" /></td>
                <td className='border p-4 hover:bg-inherit bg-white'>{data.courseCode}</td>
                <td className='border p-4 hover:bg-inherit bg-[#ff00c331] text-white'>{data.courseName}</td>
                <td className='border p-4 hover:bg-inherit bg-[#2ca02cc8] text-white'>L {data.year}</td>
                <td className='border p-4 hover:bg-inherit bg-blue-950 text-white'>{data.semester}st Sem</td>
            </tr>
         ))
      }
    </table>
  )
}

export default Courses
