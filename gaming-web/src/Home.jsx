import React from 'react'
import Live from './Live'
import Upcoming from './Upcoming'
import UpcomingLive from './UpcomingLive'
import Post from './post'

const Home = () => {
  return (
    <div className="App">
      <div className='w-10/12 pt-10 pb-10 flex flex-col gap-14 justify-center items-center'>
        <Live status="Home"/>
        <Upcoming title="Upcoming Matches" />
        <UpcomingLive status="Home"/>
        <Post />
      </div>
    </div>
  )
}

export default Home