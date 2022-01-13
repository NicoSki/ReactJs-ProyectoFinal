import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getFirestore from "../FireBase/Firebase";
import { useCartContext } from "../CartContext/CartContext";
import "./ItemDetailContainer.css";
import Contador from "../Contador/Contador";

const ItemDetailContainer = () => {

    const [info, setInfo] = useState({});
    const [loading, setLoading] = useState(true);
    const [contador, setContador] = useState(1)

    const { id } = useParams();

    const { carrito, agregarProducto } = useCartContext()

    useEffect(() => {
        setTimeout(() => {
            const db = getFirestore()
            const dbQuery = db.collection("productos").doc(id)
            dbQuery.get()
                .then(res => setInfo({ id: res.id, ...res.data() }))
                .finally(() => setLoading(false))
        }, 2000)
    }, [id])


    function onAdd(canti) {
        setContador(canti)
        agregarProducto({ ...info, cantidad: parseInt(canti) })
    }


    return (
        <div className="info">
            {
                loading ? <h2>Cargando...</h2> :
                    <div className="card" style={{ width: '18rem' }} key={info.id}>
                        <h5>{info.nombre}</h5>
                        <img src={info.img} alt="img" />
                        <p>{info.categoria}</p>
                        <p>$ {info.precio}</p>
                        <p>{info.descripcion}</p>
                        <Contador onAdd={onAdd} contador={contador} />
                    </div>
            }
        </div>
    )
}

export default ItemDetailContainer;


