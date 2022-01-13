import React, { createContext, useState, useContext } from 'react';


export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])

    const agregarProducto = (item) => {
        const index = carrito.findIndex(e => e.id === item.id)

        if (index > -1) {
            const oldQy = carrito[index].cantidad

            carrito.splice(index, 1)
            setCarrito([...carrito, { ...item, cantidad: item.cantidad + oldQy }])
        } else {
            setCarrito([...carrito, { ...item, cantidad: item.cantidad }])
        }
    }


    const cantidad = () => {
        return carrito.reduce((acum, item) => acum = acum + item.cantidad, 0)
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    const eliminarProducto = (productoId) => {
        const productos = [...carrito];
        const index = carrito.findIndex((prod) => prod.id === productoId);
        productos.splice(index, 1);
        setCarrito(productos)
    }

    return (

        <CartContext.Provider value={{
            carrito,
            agregarProducto,
            cantidad,
            vaciarCarrito,
            eliminarProducto
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
