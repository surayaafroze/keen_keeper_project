'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyNavLink = ({href,children}) => {
   const pathName =usePathname()
  return (
    <div>
       <li className='text-[#64748B] font-bold '><Link href={href} className={`flex md:gap-2 gap-1 items-center ${pathName=== href ?'bg-[#244D3F]  rounded md:px-4 md:py-2 px-3 py-2 text-white':''}`}>{children}</Link></li>
    </div>
  );
};

export default MyNavLink;