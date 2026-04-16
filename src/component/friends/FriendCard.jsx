import Image from 'next/image';
import Link from 'next/link';

import React from 'react';

const FriendCard = ({friend}) => {
const {picture,name,days_since_contact,tags,status} =friend
  return (
   <Link href={`/timeline/${friend.id}`}> 
   <div className='shadow flex flex-col justify-center items-center p-3 space-y-2 rounded-xl bg-white'>
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
      <div  className='flex justify-center items-center gap-3'>
        {tags.map((tag,i)=> <div 
        key={i} 
       
       >
      <span  className='rounded-2xl bg-[#CBFADB] text-[#244D3F] text-[12px] font-medium px-4 py-1'> {tag}</span>
        </div> )}
      </div>
      <div className='flex justify-center items-center mt-2'>
        <span className={`${status==='overdue'?'bg-[#EFAD44] text-white':status==='upcoming'?'bg-[#EF4444] text-white':status==='active'?'bg-[#244D3F] text-white':''} px-3 py-1 rounded-full text-[12px] font-medium`}>{status}</span>
      </div>
    </div>
    </Link>
   

    
  );
};

export default FriendCard;