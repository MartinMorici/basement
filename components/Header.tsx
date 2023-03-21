import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '../assets/logo.svg'
import HeaderGroup from '../assets/header-group.svg'
import YourCart from '../assets/your-cart.svg'
import Checkout from '../assets/checkout.svg'
import Hero from '../assets/header.svg'
import Backdrop from './Modal/Backdrop'
import CartItem from './CartItem'
import Modal from './Modal/Modal'

const Header = () => {
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false)
  return (
    <>
        <header className='flex justify-between items-center container pt-[33px]'>
            <Image src={Logo} alt="Logo Basement"/>
            <Image src={HeaderGroup} alt="Header icon group"/>
            <button className='text-[18px] h-[48px] w-[152px] rounded-full border-[1.5px] border-white hover:bg-white hover:text-black relative' onClick={() => {setCartIsOpen(!cartIsOpen)}}><span className='relative top-[2px]' >CART (0)</span></button>
        </header>
        <div className='container mt-[55px]'>
            <Image src={Hero} alt="Hero Section" />
        </div>

        {cartIsOpen && 
        <Backdrop setCartIsOpen={setCartIsOpen}>
          <Modal setCartIsOpen={setCartIsOpen}>
            <CartItem/>
          </Modal>
        </Backdrop>}

    </>
  )
}

export default Header