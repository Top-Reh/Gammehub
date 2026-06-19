import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Live = ({ status }) => {
    
    const [liveStreams, setLiveStreams] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/live")
            .then(res => res.json())
            .then(data => setLiveStreams(data))
    }, [])

    const customClass = status === "Home" ? "flex justify-start gap-5" : "grid grid-cols-3 gap-6 justify-center";
    const kidsClass = status === "Home" ? "w-80 h-40 shrink-0" : "w-full h-50";

  return (
    <div className='w-full flex flex-col gap-5 items-start'>
        <h2 className='text-[17px] font-semibold bg-green-500 pl-5 pr-5 pt-1 pb-1 rounded-full'>Live</h2>
        <div className={`w-full ${customClass} items-center  overflow-x-auto hide-scrollbar`}>
            {
                liveStreams.map(stream => (
                    <div key={stream.id} style={{ backgroundImage: `url(${stream.thumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className={`${kidsClass} bg-gray-500 rounded-xl relative flex flex-col gap-0 justify-end items-start pl-4 pr-4 pb-5 shrink-0`}>
                        <span className='w-4 h-4 rounded-full bg-red-500 z-10 absolute top-3 left-3'></span>
                        <h4 className='text-white text-[14px] font-semibold'>{stream.username}</h4>
                        <p className='text-white text-[13px]'>{stream.caption}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Live