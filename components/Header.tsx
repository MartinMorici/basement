import Image from 'next/image'
import React from 'react'
import Logo from '../assets/logo.svg'
import HeaderGroup from '../assets/header-group.svg'
import Hero from '../assets/header.svg'

const Header = () => {
  return (
    <>
        <header className='flex justify-between items-center container pt-[33px]'>
            <Image src={Logo} alt="Logo Basement"/>
            <Image src={HeaderGroup} alt="Header icon group"/>
            <button className='text-[18px] h-[48px] w-[152px] rounded-full border-[1.5px] border-white'>CART (0)</button>
        </header>
        <div className='container mt-[55px]'>
            <Image src={Hero} alt="Hero Section"/>
        </div>
    </>
  )
}

export default Header