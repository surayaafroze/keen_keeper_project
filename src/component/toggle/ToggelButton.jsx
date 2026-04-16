'use client'
import React, { useContext } from 'react';
import { MdOutlineTextsms } from 'react-icons/md';
import { PiPhoneCallBold, PiVideoCameraBold } from 'react-icons/pi';
import { timeLineProvider } from '../timeline/TimeLineContext';
import { toast } from 'react-toastify';
import Image from 'next/image';

const ToggelButton = ({friend}) => {
const {timeLine,setTimeLine} =useContext(timeLineProvider)

const handelar =(type)=>{
const newItem ={
  name:friend,
type:type,
time:new Date().toLocaleString()
};
setTimeLine([...timeLine,newItem])

if(type==='Call'){
  toast.success(<div className='flex justify-center items-center gap-2'>
   <Image
  className='rounded-full'
  src={friend.picture}
  alt={friend.name}
  width={30}
  height={30}
  ></Image>
    <PiPhoneCallBold   />
    <span>{friend.name} is calling</span>
  
  </div>)
}
else if(type==='Text'){
  toast.success(<div className='flex justify-center items-center gap-2'>
   <Image
  className='rounded-full'
  src={friend.picture}
  alt={friend.name}
  width={30}
  height={30}
  ></Image>
     <MdOutlineTextsms />
    <span>{friend.name} sent a message</span>
  
  </div>)
}
else{
 toast.success(<div className='flex justify-center items-center gap-2'>
   <Image
  className='rounded-full'
  src={friend.picture}
  alt={friend.name}
  width={30}
  height={30}
  ></Image>
    <PiVideoCameraBold />
    <span>{friend.name} video calling</span>
  
  </div>)
}
}

  return (
    <div className='grid md:grid-cols-3 grid-cols-1 p-5  gap-4 ' >
        <div className='p-5 py-5 bg-base-200 shadow rounded-xl flex flex-col justify-center items-center gap-3' onClick={()=>handelar('Call')}>
        <PiPhoneCallBold   />
        <p>Call</p>
      </div>


      <div className='p-5 bg-base-200 shadow rounded-xl flex flex-col justify-center items-center gap-3' onClick={()=>handelar('Text')}>
       <MdOutlineTextsms />
        <p>Text</p>
      </div>


      <div className='p-5 bg-base-200 shadow rounded-xl flex flex-col justify-center items-center gap-3' onClick={()=>handelar('Video')}>
     <PiVideoCameraBold />
        <p>Video</p>
      </div>
    </div>
  );
};

export default ToggelButton;