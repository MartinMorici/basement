import Image from 'next/image';
import React, { ReactNode, useContext, useMemo } from 'react';
import YourCart from '../../assets/your-cart.svg';
import Checkout from '../../assets/checkout.svg';
import { CartContext } from '@/context/cartContext';

interface Props {
  children: ReactNode;
}

const Modal = ({ children }: Props) => {
  const {setCartIsOpen} = useContext(CartContext)
  const {cart} = useContext(CartContext);
  const totalPrice = useMemo(() => cart?.reduce((total, item) => (item.price * item.quantity) + total, 0), [cart])
  return (
    <div className='flex flex-col w-screen h-screen sm:max-w-[824px] sm:max-h-[90vh] pt-[42px] bg-black border-l border-white border-b absolute top-0 right-0' onClick={(e) => e.stopPropagation()}>
        <div className='flex flex-col container'>
          <button className='text-[24px] font-bold self-end  mb-[36px]' onClick={() => setCartIsOpen(false)}>
            → CLOSE
          </button>
          <Image className='pb-[42px]' src={YourCart} alt='Text Your Cart' />
          {(cart?.length === 0 || (cart && cart.length === 0)) && <h2 className='text-right text-[60px] mb-10'>...is <span className='text-black addtocart'>Empty</span></h2>}
        </div>
      <div className='px-2 sm:px-8 flex flex-col overflow-y-scroll scrollbar'>
        {/* Header Cart */}

        {/* CartItems */}
        <section >{children}</section>
      </div>

      {/* Footer Cart */}
      <div className=' flex items-center justify-between border-t px-2 sm:px-8 h-[88px] mt-auto'>
        <span className='block font-bold text-[20px] sm:text-[35px]'>TOTAL: ${totalPrice?.toFixed(2)}</span>
        <div className='flex'>
          <div className='h-[88px] mr-[32px] w-[1px] bg-white'></div>
          <Image src={Checkout} alt='Checkout' className='w-[120px]' />
        </div>
      </div>
    </div>
  );
};

export default Modal;
