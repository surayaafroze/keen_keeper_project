import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className='max-w-5xl mx-auto md:mt-18 mt-10 md:p-10 p-6'>
     <div className='md:space-y-6 space-y-4 text-center '>
      <h1 className='md:text-5xl text-2xl font-bold'>Friends to keep close in your life</h1>
      <p className='text-[14px] font-light text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br/>
relationships that matter most.</p>
<button className='btn bg-[#244D3F] text-white'><FaPlus></FaPlus> Add a Friend</button>
   </div> 
<div className='flex md:flex-row flex-col md:justify-between gap-5 justify-center items-center mt-10'>
  <div className=' shadow rounded w-65 h-34 items-center flex flex-col justify-center'>
    <p className='text-[#244D3F] text-center'>10</p>
    <p className='text-[#64748B] text-center'>Total Friends</p>
  </div>
  <div className=' shadow rounded w-65 h-34 items-center flex flex-col justify-center'>
    <p className='text-[#244D3F] text-center'>3</p>
    <p className='text-[#64748B] text-center'>On Track</p>
  </div>
  <div className=' shadow rounded w-65 h-34 items-center flex flex-col justify-center'>
    <p className='text-[#244D3F] text-center'>6</p>
    <p className='text-[#64748B] text-center'>Need Attention</p>
  </div>
   <div className=' shadow rounded w-65 h-34 items-center flex flex-col justify-center'>
    <p className='text-[#244D3F] text-center'>12</p>
    <p className='text-[#64748B] text-center'>Interactions This Month</p>
  </div>
</div>
   
    </div>
  );
};

export default Banner;