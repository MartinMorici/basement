import { Product } from '@/product/types';
import Image from 'next/image';
import React, { useState } from 'react';
import AddToCart from '../assets/addtocart-bg.svg';

const Product = (prod: Product) => {
  const [showButton, setShowButton] = useState(false);
  return (
    <article key={prod.id}>
      <div className=' flex justify-center items-center relative bg-cards border-b-2 border-white' onMouseEnter={() => setShowButton(true)} onMouseLeave={() => setShowButton(false)}>
        <Image src={prod.image} width={440} height={578} alt={prod.name}  />
        {showButton && (
          <button className='absolute flex justify-center items-center'>
            <Image src={AddToCart} alt='Add To Cart' />
            <div className='absolute z-30 font-bold text-[30px] text-black whitespace-nowrap addtocart'>ADD TO CART</div>
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
