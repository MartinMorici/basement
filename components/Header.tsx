import Image from 'next/image'
import React, { useContext, useState } from 'react'
import Logo from '../assets/logo.svg'
import HeaderGroup from '../assets/header-group.svg'
import Hero from '../assets/header.svg'
import Backdrop from './CartModal/Backdrop'
import CartItem from './CartItem'
import Modal from './CartModal/Modal'
import { CartContext } from '@/context/cartContext'

const Header = () => {
  const {cart, cartIsOpen,setCartIsOpen} = useContext(CartContext)
  const handleOpen = () => {
    
  }
  return (
    <>
      <header className='flex justify-between items-center container pt-[33px]'>
          <Image className=' w-[140px] sm:w-auto' src={Logo} alt="Logo Basement"/>
          <Image className='hidden md:block' src={HeaderGroup} alt="Header icon group"/>
          <button className='text-[18px] h-[48px] w-[130px] sm:w-[152px] rounded-full border-[1.5px] border-white hover:bg-white hover:text-black relative' onClick={() => {setCartIsOpen(!cartIsOpen)}}><span className='relative top-[2px]' >CART ({cart ? cart.length : 0})</span></button>
      </header>
      <div className='container mt-[55px]'>
          <Image src={Hero} alt="Hero Section" priority />
      </div>

      {cartIsOpen &&
      <Backdrop >
        <Modal >
          {cart?.map((cartItem) => {
            return <CartItem key={cartItem.id} {...cartItem}/>
          } )}
          
        </Modal>
      </Backdrop>}
    </>
  )
}

export default Header