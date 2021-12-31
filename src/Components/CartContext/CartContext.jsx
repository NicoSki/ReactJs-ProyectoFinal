import React, { createContext, useState } from 'react';


export const CartContext = createContext()

const CartProvider = (props) => {

    const [carrito, setCarrito] = useState([])
    const [orden, setOrden] = useState(carrito)


    return (
        
        <CartContext.Provider value={[carrito, setCarrito, orden, setOrden]}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;
