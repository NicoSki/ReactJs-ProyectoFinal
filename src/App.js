import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./Components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
import CartProvider from './Components/CartContext/CartContext';
import Carrito from "./Components/CartContext/Carrito";
import ConfirmacionPedido from './Components/ConfirmacionPedido/ConfirmacionPedido';



function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <>  
    <h1>Rick y Morty Burgers</h1>
    <NavBar />
<body>
    <Routes>
      <Route exact path="/" element={<ItemListContainer />} />
      <Route exact path="/categorias/:categoria" element={<ItemListContainer />} /> 
      <Route exact path="/detalle/:id" element={<ItemDetailContainer />} />     
      <Route exact path="/carrito" element={<Carrito />} />  
      <Route exact path="/confirmacionPedido" element={<ConfirmacionPedido />} />  
    </Routes>
</body>
    </>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
