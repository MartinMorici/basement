import Image from 'next/image'
import React from 'react'
import Shirt from '../public/products/shirt.png'
const CartItem = () => {
  return (
    <article className='flex px-[14px] py-[7px] border border-white'>
        <div className="bg-cards mr-[29px]">
            <Image src={Shirt} width={350} height={218} alt="Nombre"/>
        </div>
        <div className='flex flex-col justify-between w-full'>
            <div>
                <h2 className='font-bold text-[35px]'>BLACK T-SHIRT</h2>
                <p className='font-bold text-[21px] text-[#999999]' >Unisex Basic Softstyle T-Shirt</p>
            </div>
            <div>
                <div className='font-bold text-[21px] flex items-center'>
                    QUANTITY: <button className='block text-center rounded-full border border-white w-[86px] h-[35px] ml-[15px] relative bottom-[2px] '><span className="relative top-[2px]">- 3 +</span></button>
                </div>
                <div className='flex justify-between mt-1'>
                    <div className='font-bold text-[21px] flex items-center'>
                        SIZE:
                        <button className='block ml-4 active'><span className='activeText'>S</span></button>
                        <button className='block ml-4'><span className='activeText'>M</span></button>
                        <button className='block ml-4'><span className='activeText'>L</span></button>
                        <button className='block ml-4'><span className='activeText'>XL</span></button>
                    </div>
                    <span className='block text-[35px]'>$12,50</span>
                </div>
            </div>
        </div>
    </article>
  )
}

export default CartItem