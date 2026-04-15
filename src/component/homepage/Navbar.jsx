import Link from 'next/link';

import React from 'react';
import { ImStatsDots } from 'react-icons/im';
import { RiHome2Line, RiTimeLine } from 'react-icons/ri';
import MyNavLink from './MyNavLink';

const Navbar = () => {
 
  return (
    <div className='shadow p-6'>
    <div className='md:flex md:flex-row md:justify-between items-center max-w-7xl mx-auto flex-col justify-center md:space-y-none space-y-5'>
      <h2 className='text-2xl text-center'> <span className='font-bold'>Keen</span> <span className='text-[#64748B]'>Keeper</span></h2>
      <ul className='flex md:justify-between justify-center lg:gap-10 md:gap-7 gap-3 items-center'>

      <MyNavLink  href='/'><RiHome2Line></RiHome2Line>  Home</MyNavLink>
        
      <MyNavLink href='/timeline'>< RiTimeLine></RiTimeLine>  Timeline</MyNavLink>
       
     <MyNavLink href='/stats'><ImStatsDots></ImStatsDots>  Stats</MyNavLink>

      
      </ul>
    </div>
    </div>
  );
};

export default Navbar;