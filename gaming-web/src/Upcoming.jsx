import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VISIBLE_COUNT = 3; // how many matches show by default

const Upcoming = ({ title }) => {
  const [upcomingMatches, setUpcomingMatches] = useState([]);
  const [moreMatches, setMoreMatches] = useState(false);

  useEffect(() => {
    const fetchUpcomingMatches = async () => {
      const res = await axios.get('http://localhost:3000/upcoming-matches');
      setUpcomingMatches(res.data);
    };
    fetchUpcomingMatches();
  }, []);

  const moreMatchesHandler = () => {
    setMoreMatches(prev => !prev);
  };

  const visible = upcomingMatches.slice(0, VISIBLE_COUNT);
  const extra = upcomingMatches.slice(VISIBLE_COUNT);

  const renderRow = (match) => (
    <tr key={match.id} className='pt-4 w-full'>
      <td className='pt-4 w-1/6'>{match.id}</td>
      <td className='pt-4 w-1/6 '>
        {new Date(match.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </td>
      <td className='flex w-full items-center justify-center gap-5 font-medium text-[12px] pt-4'>
        <span className='flex items-center gap-3 font-medium text-[17px]'>
          <img src={match.Ateamlogo} alt='Team Logo' className='w-8 h-8 rounded-full' /> {match.Ateam}
        </span>
        | VS |
        <span className='flex items-center gap-3 font-medium text-[12px]'>
          {match.Bteam} <img src={match.Bteamlogo} alt='Team Logo' className='w-8 h-8 rounded-full' />
        </span>
      </td>
      <td className='pt-4 w-1/6'>{match.competation}</td>
      <td className='text-green-200 pt-4 w-1/6'>{match.status}</td>
    </tr>
  );

  return (
    <div className='w-full flex flex-col gap-5 items-start'>
      <h2 className='text-[17px] font-semibold bg-white text-black pl-5 pr-5 pt-1 pb-1 rounded-full'>
        {title}
      </h2>

      <table className='w-full text-center gap-5 table-fixed'>
        <thead className='h-16 text-white text-[17px]'>
          <tr>
            <th className='font-medium w-1/6'></th>
            <th className='font-medium w-1/6'>Time</th>
            <th className='font-medium w-2/6'>Match</th>
            <th className='font-medium w-1/6'>Competition</th>
            <th className='font-medium w-1/6'>Status</th>
          </tr>
        </thead>
        <tbody>
          {visible.map(renderRow)}
        </tbody>
      </table>

      {/* Animated extra-matches wrapper using grid-template-rows trick */}
      {extra.length > 0 && (
        <div
          className='w-full grid transition-all duration-500 ease-in-out'
          style={{ gridTemplateRows: moreMatches ? '1fr' : '0fr' }}
        >
          <div className='overflow-hidden min-h-0'>
            <table className='w-full text-center gap-5 table-fixed'>
              <tbody>
                {extra.map(renderRow)}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {extra.length > 0 && (
        <div
          className='w-full flex justify-center items-center text-white text-[17px] cursor-pointer'
          onClick={moreMatchesHandler}
        >
          {moreMatches ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
            </svg>
          )}
        </div>
      )}
    </div>
  );
};

export default Upcoming;

// {
          //   moreMatches ? (
          //   upcomingMatches.map(match => (
          //     <tr key={match.id} className='pt-4'>
          //       <td className='pt-4'>{match.id}</td>
          //       <td className='pt-4'>{new Date(match.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
          //       <td className='flex items-center justify-center gap-5 font-medium text-[17px] pt-4'>
          //         <span className='flex items-center gap-3 font-medium text-[17px]'><img src={match.Ateamlogo} alt='Team Logo' className='w-8 h-8 rounded-full'></img> {match.Ateam}</span>
          //         | VS |
          //         <span className='flex items-center gap-3 font-medium text-[17px]'> {match.Bteam} <img src={match.Bteamlogo} alt='Team Logo' className='w-8 h-8 rounded-full'></img> </span>
          //       </td>
          //       <td className='pt-4'>{match.competation}</td>
          //       <td className='text-green-200 pt-4'>{match.status}</td>
          //     </tr>
          //   ))
          //    ) : (
          //   upcomingMatches.slice(0, 5).map(match => (
          //     <tr key={match.id} className='pt-4'>
          //       <td className='pt-4'>{match.id}</td>
          //       <td className='pt-4'>{new Date(match.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
          //       <td className='flex items-center justify-center gap-5 font-medium text-[17px] pt-4'>
          //         <span className='flex items-center gap-3 font-medium text-[17px]'><img src={match.Ateamlogo} alt='Team Logo' className='w-8 h-8 rounded-full'></img> {match.Ateam}</span>
          //         | VS |
          //         <span className='flex items-center gap-3 font-medium text-[17px]'> {match.Bteam} <img src={match.Bteamlogo} alt='Team Logo' className='w-8 h-8 rounded-full'></img> </span>
          //       </td>
          //       <td className='pt-4'>{match.competation}</td>
          //       <td className='text-green-200 pt-4'>{match.status}</td>
          //     </tr>
          //   ))
          //    )
          // }