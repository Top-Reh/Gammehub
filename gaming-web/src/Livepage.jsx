import React from 'react'
import Live from './Live'

const Livepage = () => {
  return (
    <div className='App'>
      <div className='w-10/12 pt-10 pb-10 flex flex-col gap-14 justify-center items-center'>
        <Live status="Live" />
      </div>
    </div>
  )
}

export default Livepage