import React, { useEffect, useContext, useState } from 'react';
import { CartContext } from './CartContext';
import "./Carrito.css";
import { Link } from "react-router-dom";






const Carrito = () => {

    const [carrito, setCarrito] = useContext(CartContext)



    let [total, setTotal] = useState(0);



    useEffect(() => {
        let final = 0;
        carrito.map((item) => (
            final = final + (item.precio * item.cantidad)
        ))
        setTotal(final)
    }, [carrito])

    

    const vaciar = () => {
        setCarrito([])
    }

    const Confirmar = () => {
        return carrito;
     }


    return (
        <>
            <h4>Carrito</h4>
            <button className='btn btn-danger' onClick={() => vaciar()}>Reiniciar Pedido</button>
            {
                carrito.length !== 0 ?  <h6>Productos seleccionados: {carrito.length}</h6> :  null
            }
           
            {
                carrito.map((item) => (
                    <div key={item.id} className="carrito">
                        <h1>{item.nombre}</h1>
                        <h3>{item.categoria}</h3>
                        <img src={item.img} alt="img" />
                        <p>Precio Unitario: $ {item.precio}</p>
                        {
                            item.cantidad === 1 ? <p>Cantidad Seleccionada: {item.cantidad} Unidad</p> : <p>Cantidad Seleccionada: {item.cantidad} Unidades</p>
                        }
                        
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
