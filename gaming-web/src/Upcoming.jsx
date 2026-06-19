import React, { useEffect, useState } from 'react'

const Upcoming = ({ title }) => {

  const [upcomingMatches, setUpcomingMatches] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/upcoming-matches")
      .then(res => res.json())
      .then(data => setUpcomingMatches(data))
      .catch(err => console.error("Error fetching upcoming matches:", err));
  }, []);


  return (
    <div className='w-full flex flex-col gap-5 items-start'>
      <h2 className='text-[17px] font-semibold bg-white text-black pl-5 pr-5 pt-1 pb-1 rounded-full'>{title}</h2>
      <table className='w-full text-center gap-5'>
        <thead className='h-16 text-white text-[17px]'>
          <tr >
            <th className='font-medium'></th>
            <th className='font-medium'>Time</th>
            <th className='font-medium'>Match</th>
            <th className='font-medium'>Competition</th>
            <th className='font-medium'>Status</th>
          </tr>
        </thead>
        <tbody className=''>
          {
            upcomingMatches.map(match => (
              <tr key={match.id} className='pt-4'>
                <td className='pt-4'>{match.id}</td>
                <td className='pt-4'>{new Date(match.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
                <td className='flex items-center justify-center gap-5 font-medium text-[17px] pt-4'>
                  <span className='flex items-center gap-3 font-medium text-[17px]'><img src={match.Ateamlogo} alt='Team Logo' className='w-8 h-8 rounded-full'></img> {match.Ateam}</span>
                  | VS |
                  <span className='flex items-center gap-3 font-medium text-[17px]'> {match.Bteam} <img src={match.Bteamlogo} alt='Team Logo' className='w-8 h-8 rounded-full'></img> </span>
                </td>
                <td className='pt-4'>{match.competation}</td>
                <td className='text-green-200 pt-4'>{match.status}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Upcoming