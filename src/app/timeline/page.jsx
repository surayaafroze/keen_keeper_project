'use client'
import { timeLineProvider } from '@/component/timeline/TimeLineContext';
import React, { useContext } from 'react';
import { MdOutlineTextsms } from 'react-icons/md';
import { PiPhoneCallBold, PiVideoCameraBold } from 'react-icons/pi';

const TimeLine = () => {
  const {timeLine} =useContext(timeLineProvider)

  return (
    <div className='bg-base-200 h-screen p-5'>
     <div className='max-w-7xl mx-auto'>
       <h2 className='text-3xl font-bold'>Timeline</h2>
    <div className='grid grid-cols-1 gap-4 pt-3'>
       {timeLine.map((iFriend,i)=><div 
     key={i}
     className=' '
     >
  
  <div className='bg-white rounded-xl p-4 flex gap-3 items-center shadow'>
      {iFriend.type==='Call' &&  <PiPhoneCallBold />}
    {iFriend.type==='Text' &&  <MdOutlineTextsms />}
    {iFriend.type==='Video' &&   <PiVideoCameraBold />}
  <div>
      <p><strong className='text-[#244D3F]'>{iFriend.type}</strong> with <span className='text-[#64748B]'>{iFriend.name.name}</span></p>
    <p className='text-[#64748B]'>{iFriend.time}</p>
  </div>
  </div>
    
     </div>)}
    </div>
     </div>
    </div>
  );
};

export default TimeLine;