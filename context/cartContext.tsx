import { Product } from '@/product/types';
import React, { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';


interface Props {
    children: ReactNode;
}
export interface CartItem extends Product {
    quantity: number;
}
interface CartCtx {
    cart?: CartItem[],
    handleCart: (prod: CartItem) => void
    addQuantity: (prod: CartItem) => void
    removeQuantity: (prod: CartItem) => void
    removeItem: (prod:CartItem) => void
    setCartIsOpen: Dispatch<SetStateAction<boolean>>
    cartIsOpen:boolean
}

export const CartContext = React.createContext({} as CartCtx);

const CartProvider = ({ children }: Props) => {
  const [cart, setCart] = useState<CartItem[]>();
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false)

  useEffect(() => {
    cartIsOpen ? document.body.classList.add("scroll") : document.body.classList.remove('scroll')
  }, [cartIsOpen])
  
  const handleCart = (prod: CartItem) => {
    const encontrado = cart?.find((item) => item.id === prod.id);

    if (encontrado) {
      const updatedCart: CartItem[] | undefined = cart?.map((cartItem) => {
        return cartItem.id === prod.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem;
      });

      setCart(updatedCart);
    } else {
      const updatedCart = cart ? [...cart, { ...prod, quantity: 1 }] : [{ ...prod, quantity: 1 }];
      setCart(updatedCart)
    }
  };

  const addQuantity = (prod : CartItem) => {
    const encontrado  = cart?.find((item) => item.id === prod.id)
    if (encontrado) {
      const updatedCart = cart?.map((cartItem) => (cartItem.id === prod.id) ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
      setCart(updatedCart)
    }
  }
  const removeQuantity = (prod: CartItem) => {
    const encontrado  = cart?.find((item) => item.id === prod.id)
    if (encontrado) {
      const updatedCart = cart?.map((cartItem) => (cartItem.id === prod.id) ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem)
      setCart(updatedCart)
    }
  }

  const removeItem = (prod:CartItem) => {
    const updatedCart = cart?.filter((item) => item.id !== prod.id)
    setCart(updatedCart)
  }

  return <CartContext.Provider value={{ cart, handleCart, addQuantity, removeQuantity,removeItem, setCartIsOpen, cartIsOpen }}>{children}</CartContext.Provider>;
};

export default CartProvider;
