import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext/CartContext';
import "./ConfirmacionPedido.css";
import swal from 'sweetalert';
import getFirestore from "../FireBase/Firebase";



const ConfirmacionPedido = () => {

    const [pedido, setPedido] = useContext(CartContext)
    const [error, setError] = useState("")
    const [mostrarError, setMostrarError] = useState(false)


    const [comanda, setComanda] = useState({
        nombre: "",
        apellido: "",
        email: "",
        confirmacion: "",
        telefono: 0,
        direccion: "",
        total: 0
    });


    const infoInput = (evento) => {
        setComanda({
            ...comanda,
            [evento.target.name]: evento.target.value
        })
    }






    const Orden = (e) => {
        e.preventDefault()

        if(!comanda.nombre.trim()){
            setError(alert("completa el nombre"))
            setMostrarError(true)
            return
        } else if(!comanda.apellido.trim()){
             setError(alert("completa el apellido"))
            setMostrarError(true)
            return
        } else if(!comanda.email.trim()){
             setError(alert("completa el email"))
            setMostrarError(true)
            return
        } else if(!comanda.confirmacion.trim()){
             setError(alert("completa el email"))
            setMostrarError(true)
            return
        } else if((comanda.telefono.length < 9) || (comanda.telefono === 0)){
             setError(alert("completa tu telefono"))
            setMostrarError(true)
            return
        } else if(!comanda.direccion.trim()){
             setError(alert("completa la direccion"))
            setMostrarError(true)
            return
        }




        if(comanda.email !== comanda.confirmacion){
            setMostrarError(true)
            setError(alert("Los mails deben ser iguales"))
            return
        } 

            let fin = 0

            let aPagar = pedido.map((item) => (fin = fin + (item.precio * item.cantidad)))
            let particular = pedido.map((e) => ({nombre: e.nombre,categoria: e.categoria, cantidad: e.cantidad,precio: (e.precio * e.cantidad)}))
           comanda.total = aPagar[aPagar.length - 1]
           comanda.pedido = particular 
           setMostrarError(false)

            
           const db = getFirestore()
           db.collection("pedidos").add(comanda)
           .then(res => swal({
            title: "Tu Orden ya fue procesada - Muchas Gracias Por Elegirnos!!",
            text: `No olvides tu numero de orden: ${res.id}`,
            icon: "success",
          }))
    }

    return (
        <div className='pedido'>
            <h1>Confirmación del Pedido</h1>
            <br />
            <br />
            <form onSubmit={Orden}>
                   
                <div className="input-group">
                    <span className="input-group-text">Nombre</span>
                    <input type="text" aria-label="Nombre" className="form-control" name='nombre' onChange={infoInput} />
                </div>

                <br />

                
                <div className="input-group">
                    <span className="input-group-text">Apellido</span>
                    <input type="text" aria-label="Apellido" className="form-control" name='apellido' onChange={infoInput} />
                </div>

                <br />

               
                <div className="input-group">
                    <span className="input-group-text">Email</span>
                    <input type="email" aria-label="Email" className="form-control" placeholder='ejemplo@gmail.com' name='email' onChange={infoInput} />
                </div>

                <br />

               
                <div className="input-group">
                    <span className="input-group-text">Repetir Email</span>
                    <input type="email" aria-label="Email" className="form-control" placeholder='Repetir Mail' name='confirmacion' onChange={infoInput} />
                </div>

                <br />

                
                <div className="input-group">
                    <span className="input-group-text">Telefono</span>
                    <span className="input-group-text">+54</span>
                    <input type="number" aria-label="Telefono" className="form-control" placeholder='Min 9 Caracteres' name='telefono' onChange={infoInput} />
                </div>

                <br />

               
                <div className="input-group">
                    <span className="input-group-text">Dirección de Entrega</span>
                    <input type="text" aria-label="Direccion" className="form-control" placeholder='Especificar localidad' name='direccion' onChange={infoInput} />
                </div>

                <button className='pedido btn btn-primary'>Confirmar Pedido</button>
            </form>
        </div>
    )
}

export default ConfirmacionPedido;
