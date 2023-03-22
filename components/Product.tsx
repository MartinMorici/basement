import { CartContext, CartItem } from '@/context/cartContext';
import { Product } from '@/product/types';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import AddToCart from '../assets/addtocart-bg.svg';

const Product = (prod: Product) => {
  const {handleCart, cart} = useContext(CartContext)
  const [showButton, setShowButton] = useState(false);
  const newProduct: CartItem = {
    ...prod,
    quantity: 1
  };
  
  return (
    <article key={prod.id}>
      <div className=' flex justify-center items-center relative bg-cards border-b-2 border-white' onMouseEnter={() => setShowButton(true)} onMouseLeave={() => setShowButton(false)}>
        <Image src={prod.image} width={440} height={578} alt={prod.name}  />
        {showButton && (
          <button className='absolute flex justify-center items-center group active:scale-110 transition-all ' onClick={() => handleCart(newProduct)}>
            <Image src={AddToCart} alt='Add To Cart' />
            <div className='absolute z-30 font-bold text-[30px] text-black whitespace-nowrap addtocart group-hover:text-red-500'>ADD TO CART</div>
          </button>
        )}
      </div>
      <div className='flex justify-between text-[21px] font-bold mt-2'>
        <span>{prod.name}</span>
        <span>${prod.price}</span>
      </div>
    </article>
  );
};

export default Product;
