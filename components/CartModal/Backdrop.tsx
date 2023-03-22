import { CartContext } from '@/context/cartContext';
import React, { ReactNode, useContext } from 'react';

interface Props{
    children: ReactNode
}

const Backdrop = ({children} : Props) => {
  const {setCartIsOpen} = useContext(CartContext)
  return <div className='fixed inset-0 bg-[#000000B3] z-50' onClick={() => setCartIsOpen(false)}>{children}</div>;
};

export default Backdrop;
