import React, { ReactNode } from 'react';

interface Props{
    children: ReactNode
    setCartIsOpen: (boolean: boolean) => void
}
const Backdrop = ({children, setCartIsOpen} : Props) => {
  return <div className='fixed inset-0 bg-[#000000B3] z-50' onClick={() => setCartIsOpen(false)}>{children}</div>;
};

export default Backdrop;
