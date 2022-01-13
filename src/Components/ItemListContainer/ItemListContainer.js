import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import getFirestore from '../FireBase/Firebase';
import "./ItemListContainer.css"



const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoria } = useParams()


    useEffect(() => {
        setTimeout(() => {
            const db = getFirestore()
            if (categoria) {
                const dbQuery = db.collection("productos").where("categoria", "==", categoria)
                dbQuery.get()
                    .then(data => setProductos(data.docs.map(item => ({ id: item.id, ...item.data() }))))
                    .catch(err => err)
                    .finally(() => setLoading(false))

            } else {
                const dbQuery = db.collection("productos")
                dbQuery.get()
                    .then(data => setProductos(data.docs.map(item => ({ id: item.id, ...item.data() }))))
                    .catch(err => err)
                    .finally(() => setLoading(false))
            }
        }, 2000)
    }, [categoria])

    return (
        <div className='productos'>
            {
                loading ? <h1 className='cargando'>Cargando...</h1> : productos.map((items) => (
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
    )
}

export default ItemListContainer;