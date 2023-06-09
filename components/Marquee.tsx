import Marqueeizq from '../assets/pincho-izq.svg';
import Marqueeder from '../assets/pincho-der.svg';

import React from 'react'
import Image from 'next/image';

const Marquee = () => {
  return (
    <div className='relative'>
    <Image className='hidden md:block absolute left-[7vw] mt-[-12px] z-30' src={Marqueeizq} alt='Pincho Marquee' />
    <div className='border-y-[1.5px] mt-3 md:mt-[60px]  flex text-[16px] md:text-[24px] sm:text-[35px] font-bold  py-2 md:py-[14px] overflow-x-hidden '>
      <div className='animate-marquee whitespace-nowrap  '> 
        <span>A man can’t have enough base­ment swag  —  A man can’t have enough base­ment swag —  </span>
        <span>A man can’t have enough base­ment swag  —  A man can’t have enough base­ment swag — </span>
        <span>A man can’t have enough base­ment swag  —  A man can’t have enough base­ment swag — </span>
        <span>A man can’t have enough base­ment swag  —  A man can’t have enough base­ment swag — </span>
        <span>A man can’t have enough base­ment swag  —  A man can’t have enough base­ment swag  </span>
      </div>
    </div>
    <Image className='hidden md:block absolute right-[7.2vw] top-0 mt-[-120px] z-30' src={Marqueeder} alt='Pincho Marquee' />
  </div>
  )
}

export default Marquee