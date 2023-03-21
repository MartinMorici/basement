import Image from 'next/image';
import React, { ReactNode } from 'react';
import YourCart from '../../assets/your-cart.svg';
import Checkout from '../../assets/checkout.svg';

interface Props {
  children: ReactNode;
  setCartIsOpen: (boolean: boolean) => void;
}

const Modal = ({ children, setCartIsOpen }: Props) => {
  return (
    <div className='max-w-[824px] h-fit pt-[42px] bg-black border-l border-white border-b absolute top-0 right-0' onClick={(e) => e.stopPropagation()}>
      <div className='px-8 flex flex-col'>
        {/* Header Cart */}
        <button className='text-[24px] font-bold self-end  mb-[36px]' onClick={() => setCartIsOpen(false)}>
          → CLOSE
        </button>
        <Image src={YourCart} alt='Text Your Cart' />

        {/* CartItems */}
        <section className='mt-[42px]'>{children}</section>
      </div>

      {/* Footer Cart */}
      <div className=' flex items-center justify-between border-t px-8 h-[88px] mt-[240px] '>
        <span className='block font-bold text-[35px]'>TOTAL: $36,50</span>
        <div className='flex'>
          <div className='h-[88px] mr-[32px] w-[1px] bg-white'></div>
          <Image src={Checkout} alt='Checkout' className='' />
        </div>
      </div>
    </div>
  );
};

export default Modal;
