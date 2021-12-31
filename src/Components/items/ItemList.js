import React, { useState, useEffect } from 'react';
import getFirestore from '../FireBase/Firebase';
import { Link } from "react-router-dom";
import "./ItemList.css";



const ItemList = () => {


    const [productos, setProductos] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const dbQuery = db.collection("productos")
        dbQuery.get()
            .then(data => setProductos(data.docs.map(item => ({ id: item.id, ...item.data() }))))
    }, [])


    return (
        <div className="productos">
            {
                productos.map((items) => (
                    <div className="card" style={{ width: "18rem" }} key={items.id}>
                        <img src={items.img} className="card-img-top" alt="img" />
                        <div className="card-body">
                            <h5 className="card-title">{items.nombre}</h5>
                            <p className="card-text">{items.categoria}</p>
                            <Link to={`/detalle/${items.id}`}>
                                <button className="btn btn-success">Ver más</button>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default ItemList;
