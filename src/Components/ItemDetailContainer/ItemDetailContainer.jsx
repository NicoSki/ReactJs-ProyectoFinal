import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import getFirestore from "../FireBase/Firebase";
import { CartContext } from "../CartContext/CartContext";
import "./ItemDetailContainer.css";
import swal from 'sweetalert';

const ItemDetailContainer = () => {

    const [info, setInfo] = useState({});
    const [loading, setLoading] = useState(true);
    const [contador, setContador] = useState(1);
    const [carrito, setCarrito] = useContext(CartContext)

    const { id } = useParams();


    useEffect(() => {
        setTimeout(() => {
            const db = getFirestore()
            const dbQuery = db.collection("productos").doc(id)
            dbQuery.get()
                .then(res => setInfo({ id: res.id, ...res.data() }))
                .finally(() => setLoading(false))
        }, 2000)
    }, [id])


    function agregar() {
        info.cantidad = contador 
        const temporal = carrito;
        temporal.push(info);
        setCarrito(temporal);
        swal({
            title: "Tu Producto",
            text: "Fue agregado Exitosamente!",
            icon: "success",
          });
    }

    //contador:

    function Sumar() {
        if(contador < 5){
        setContador(contador + 1)
        }
    }

    function Restar() {
        if(contador >= 2){
        setContador(contador - 1)
        }
    }


    //fin de contador



    return (
        <div className="info">
            {loading ? <h2>Cargando...</h2> :
                <div className="card" style={{ width: '18rem' }} key={info.id}>
                    <h5>{info.nombre}</h5>
                    <img src={info.img} alt="img" />
                    <p>{info.categoria}</p>
                    <p>$ {info.precio}</p>
                    <p>{info.descripcion}</p>
                    <button className="btn btn-outline-info" onClick={Restar}>-</button>
                    {contador}
                    <button className="btn btn-outline-info" onClick={Sumar}>+</button>
                    <button className="btn btn-warning" onClick={agregar}>Agregar</button>
                </div>
            }
        </div>
    )
}

export default ItemDetailContainer;


