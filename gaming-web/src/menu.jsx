import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='w-full h-16 p-5 pl-0 pr-0 bg-gray-500 flex items-center justify-center'>
        <div className='w-10/12 h-full flex items-center justify-between'>
            <h4 className='text-2xl text-white'>Gaming Web</h4>
            <ol className='flex gap-8'>
                <li className='text-[18px] font-semibold'><Link to="/">Home</Link></li>
                <li className='text-[18px] font-semibold'><Link to="/schedule">Schedule</Link></li>
                <li className='text-[18px] font-semibold'><Link to="/live" >Live</Link></li>
            </ol>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 cursor-pointer">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
        </div>
    </div>
  )
}

export default Menu