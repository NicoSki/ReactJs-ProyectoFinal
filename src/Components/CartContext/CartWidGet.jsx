import React from 'react'
import { useCartContext } from './CartContext'

const CartWidGet = () => {
    const { carrito } = useCartContext()

    let cantidades = carrito.map(item => item.cantidad)
    let cantidadesTotales = 0;

    for (let i = 0; i < cantidades.length; i++) {
        cantidadesTotales = cantidadesTotales + cantidades[i]
    }
    
    return (
        <div>
            <button type="button" class="btn btn-dark position-relative">
                🛒
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cantidadesTotales}
                </span>
            </button>
        </div>
    )
}

export default CartWidGet;
