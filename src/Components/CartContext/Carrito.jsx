import React, { useEffect, useState } from 'react';
import { useCartContext } from './CartContext';
import "./Carrito.css";
import { Link } from "react-router-dom";






const Carrito = () => {

    const { carrito, vaciarCarrito, eliminarProducto } = useCartContext()

    let [total, setTotal] = useState(0);


    useEffect(() => {
        let final = 0;
        carrito.map((item) => (
            final = final + (item.precio * item.cantidad)
        ))
        setTotal(final)
    }, [carrito])


    //solucionar problema del producto
    // function eliminarProducto(e) {
    //     const id = e.target.id
    //     console.log(id);
    //     // carrito.filter((carritoId) => {
    //     //     console.log(carritoId);
    //     //     return carritoId === id
    //     // })
    // }



    const Confirmar = () => {
        return carrito;
    }


    return (
        <>
            <h4>Carrito</h4>
            <section className='botones'>
                <Link to="/">
                    <button className='btn btn-primary'>Volver a los productos</button>
                </Link>
                <button className='btn btn-danger' onClick={() => vaciarCarrito()}>Reiniciar Pedido</button>
            </section>

            {
                carrito.map((item) => (
                    <div key={item.id} className="carrito">
                        <h1>{item.nombre}</h1>
                        <img src={item.img} alt="img" />
                        <p>Precio Unitario: $ {item.precio}</p>

                        {
                            item.cantidad === 1 ? <p>Cantidad Seleccionada: {item.cantidad} Unidad</p> : <p>Cantidad Seleccionada: {item.cantidad} Unidades</p>
                        }
                        <button className='btn btn-danger' type="button" onClick={()=>eliminarProducto(item.id)}>🗑</button>
                    </div>
                ))
            }

            {
                total === 0 ? <h2>No agregaste ningun producto</h2> : <h2>Total a pagar = $ {total}</h2>
            }

            {
                carrito.length !== 0 ?

                    <Link to="/confirmacionPedido">
                        <button className="btn btn-primary" onClick={() => Confirmar()}>Finalizar Pedido</button>
                    </Link>
                    : <button className="btn btn-primary disabled">Confirmar Pedido</button>
            }

        </>
    )
}

export default Carrito;
