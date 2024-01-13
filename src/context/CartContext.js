import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext({
    cart:[]
});

const cartInitial= JSON.parse(localStorage.getItem('cart')) || [];

const CartContextProvider  = ({ children }) => {

    // Crear el cart vacío
    const [cart, setCart] = useState(cartInitial);
    
    // Si está el producto, le suma la cantidad elegida - Si no está, lo agrega al carrito
    const addToCart = (item) => {
        const indexProd = cart.findIndex((prod) => prod.id === item.id);
        if (indexProd !== -1) {
            const newCart = [...cart];
            newCart[indexProd].quantity = newCart[indexProd].quantity + item.quantity;
            setCart(newCart);
           // localStorage.setItem();
        } else {
            setCart([...cart, item]);
        }
    };

    const removeFromCart = (itemId) => {
        setCart(cart.filter(product=>product.id !==itemId))
        
      };
      const decreaseFromCart = (itemId) => {
        const indexProd = cart.findIndex((prod) => prod.id === itemId);
        if (indexProd !== -1) {
          const newCart = [...cart];
          // Validar que la cantidad no sea menor que 1
          newCart[indexProd].quantity = Math.max(1, newCart[indexProd].quantity - 1);
          setCart(newCart);
        } else {
          setCart([...cart]);
        }
      }
      
      const increaseFromCart = (itemId,stock) => {
        const indexProd = cart.findIndex((prod) => prod.id === itemId);
        if (indexProd !== -1) {
          const newCart = [...cart];

          const maxQuantity = stock; 
          newCart[indexProd].quantity = Math.min(
            maxQuantity,
            newCart[indexProd].quantity + 1
          );
          setCart(newCart);
        } else {
          setCart([...cart]);
        }
      }
      
  

    // Vacía el carrito
    const clearCart = () => setCart([]);

    const cantidadTotal = cart.reduce((total, prod) => total + prod.quantity, 0);
    const valorTotal = cart.reduce((total, prod) => total + (prod.quantity * prod.precio), 0);
    

    useEffect(()=>{
      localStorage.setItem('cart',JSON.stringify(cart))
    },[cart])

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, cantidadTotal, valorTotal,decreaseFromCart,increaseFromCart}}>
            {children}
        </CartContext.Provider>
    );
}
 
export default CartContextProvider;