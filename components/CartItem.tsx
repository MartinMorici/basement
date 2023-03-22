import { CartContext, CartItem } from '@/context/cartContext';
import Image from 'next/image';
import React, { useContext, useState } from 'react';

const CartItem = (cartItem: CartItem) => {
  const {addQuantity,removeQuantity,removeItem} = useContext(CartContext)
  const [actualSize, setSize] = useState<string>()
  return (
    <article className='flex px-[14px] py-[7px] border border-white mb-9'>
      <div className='bg-cards mr-[29px]'>
        <Image src={cartItem.image} width={350} height={218} alt='Nombre' />
      </div>
      <div className='flex flex-col justify-between w-full'>
        <div>
          <div className='flex justify-between'>
            <h2 className='font-bold text-[35px]'>{cartItem.name} </h2>
            <button className='text-[35px]' onClick={() => removeItem(cartItem)}>X</button>
          </div>
          <p className='font-bold text-[21px] text-[#999999]'>{cartItem.desc}</p>
        </div>
        <div>
          <div className='font-bold text-[21px] flex items-center'>
            QUANTITY:
            <button className='block text-center rounded-full border border-white w-[86px] h-[35px] ml-[15px] relative bottom-[2px] '>
              <span className='relative top-[2px]'><button className='remove' onClick={() => removeQuantity(cartItem)} disabled={cartItem.quantity<= 1}>-</button> {cartItem.quantity} <button onClick={() => addQuantity(cartItem)}>+</button></span>
            </button>
          </div>
          <div className='flex justify-between mt-1'>
            <div className='font-bold text-[21px] flex items-center'>
              SIZE:
              {cartItem.options[0].values.map((size,index) => {
                return (
                  <button className={`block ml-4 ${actualSize === size ? 'active' : ''} `} onClick={() => setSize(size)} key={index} >
                    <span className='activeText' >{size}</span>
                  </button>
                );
              })}
            </div>
            <span className='block text-[35px]'>${(cartItem.price * cartItem.quantity).toFixed(2)}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
