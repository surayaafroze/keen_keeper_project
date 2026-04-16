import Image from 'next/image';
import React from 'react';
import { MdOutlineTextsms } from 'react-icons/md';
import { PiArchiveBold, PiPhoneCallBold, PiVideoCameraBold } from 'react-icons/pi';
import { RiDeleteBinLine, RiNotificationSnoozeLine } from 'react-icons/ri';

const DetailsPage =async ({params}) => {
const {id} =await params;
const res =await fetch ('http://localhost:3000/data.json');
const friends =await res.json();
const friend =friends.find((friend,i)=>friend.id== id)
const {picture,name,days_since_contact,tags,status,email,bio,goal,next_due_date} =friend
  return (
    <div className='bg-base-200 min-h-screen pt-10 pb-50 '>

    <div className='max-w-7xl mx-auto grid md:grid-cols-2 grid-cols-1 md:p-10 p-6 justify-center  gap-4'>
        {/* div 1.1 */}
     <div  className=' flex flex-col gap-4'>
      <div className='shadow flex flex-col justify-center items-center p-8 space-y-2 rounded-xl bg-white'>
           <div>
             <Image
             className='rounded-full mt-2'
             src={picture}
             alt={name}
             width={90}
             height={90}
             >
     
             </Image>
           </div>
           <h2>{name}</h2>
           <p className='text-[12px] text-[#64748B]'>{days_since_contact}d ago</p>

 <div className='flex justify-center items-center mt-2'>
             <span className={`${status==='overdue'?'bg-[#EFAD44] text-white':status==='upcoming'?'bg-[#EF4444] text-white':status==='active'?'bg-[#244D3F] text-white':''} px-3 py-1 rounded-full text-[12px] font-medium`}>{status}</span>
           </div>


      <div  className='flex justify-center items-center gap-3'>
             {tags.map((tag,i)=> <div 
             key={i} >
            
           <span  className='rounded-2xl bg-[#CBFADB] text-[#244D3F] text-[12px] font-medium px-4 py-1'> {tag}</span>
     </div> )}
           </div>
          
          <p className='italic text-[#64748B] text-center text-l'>{`"${bio}"`}</p>
          <p className=' text-[#64748B] text-center'>Preferred:{email}</p>
         </div>

{/* div 1.2 */}
      <div className='flex flex-col gap-4'>
   
      <p className='flex gap-2 justify-center items-center shadow p-5 bg-white rounded-xl'><RiNotificationSnoozeLine></RiNotificationSnoozeLine> Snooze 2 weeks</p>
   
      <p className='flex gap-2 justify-center items-center shadow p-5 bg-white rounded-xl'><PiArchiveBold></PiArchiveBold> Archive</p>
   
      <p className='flex gap-2 justify-center items-center shadow p-5 bg-white rounded-xl text-red-600'><RiDeleteBinLine></RiDeleteBinLine> Delete</p>
   
      </div>

      </div> 



     {/* div 2 */}
     <div className='flex flex-col gap-8'>
      {/* div 2.1 */}
      <div className='flex md:flex-row flex-col justify-center items-center gap-4'>
        <div className='md:w-60 w-82 h-33.5 shadow rounded-xl flex flex-col justify-center items-center bg-white p-2'>
          <p className='text-[#244D3F] text-2xl font-semibold'>{days_since_contact}</p>
          <p className='text-[#64748B] text-[18px] font-light'>Days Since Contact</p>
        </div>


        <div className='md:w-60 w-82 h-33.5 shadow rounded-xl flex flex-col justify-center items-center bg-white p-2'>
          <p className='text-[#244D3F] text-2xl font-semibold'>{goal}</p>
          <p className='text-[#64748B] text-[18px] font-light'>Goal (Days)</p>
        </div>


        <div className='md:w-60 w-82 h-33.5 shadow rounded-xl flex flex-col justify-center items-center bg-white p-2'>
          <p className='text-[#244D3F] text-2xl font-semibold'>{next_due_date}</p>
          <p className='text-[#64748B] text-[18px] font-light'>Next Due</p>
        </div>
      </div>

      {/* div 2.2 */}
      <div className='p-6 bg-white shadow rounded-xl'>
        <div className='flex justify-between items-center'>
          <p>Relationship Goal</p>
          <button className='btn '>Edit</button>
        </div>
        <p className='text-[#64748B]'>Connect every <span className='font-bold text-[#1F2937]'>{goal}</span></p>
      </div>
      
      {/* 2.3 */}
      <div className='bg-white rounded-xl shadow'>
      <p className='mt-3 mb-3 text-xl text-[#244D3F] md:text-start text-center pl-5'> Quick Check-In</p>
    

    <div className='grid md:grid-cols-3 grid-cols-1 p-5  gap-4'>
        <div className='p-5 py-5 bg-base-200 shadow rounded-xl flex flex-col justify-center items-center gap-3'>
        <PiPhoneCallBold />
        <p>Call</p>
      </div>


      <div className='p-5 bg-base-200 shadow rounded-xl flex flex-col justify-center items-center gap-3'>
       <MdOutlineTextsms />
        <p>Text</p>
      </div>


      <div className='p-5 bg-base-200 shadow rounded-xl flex flex-col justify-center items-center gap-3'>
     <PiVideoCameraBold />
        <p>Video</p>
      </div>
    </div>
      </div>
      </div> 
    </div>
    </div>
  );
};

export default DetailsPage;