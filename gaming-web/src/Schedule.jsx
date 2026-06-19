import React from 'react'
import Upcoming from './Upcoming'
import UpcomingLive from './UpcomingLive'

const Schedule = () => {
  return (
    <div className='App'>
      <div className='w-10/12 pt-10 pb-10 flex flex-col gap-14 justify-center items-center'>
        <div className='w-full flex flex-col gap-10 justify-center items-center bg-gray-800 p-10 rounded-lg'>
          <Upcoming title="MPL" />
        </div>
        <div className='w-full flex flex-col gap-10 justify-center items-center bg-gray-800 p-10 rounded-lg'>
          <Upcoming title="MPL" />
        </div>
        <UpcomingLive status="Schedule" />
      </div>
    </div>
  )
}

export default Schedule