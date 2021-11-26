import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./Components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Hamburguesas from "./Components/items/Hamburguesas";
import Papas from "./Components/items/Papas";
import Bebidas from "./Components/items/Bebidas"; 
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"




function App() {
  return (
    <BrowserRouter>
    <>  
    <h1>Rick y Morty Burgers</h1>
    <NavBar />

    <Routes>
      <Route exact path="/" element={<ItemListContainer />} />
      <Route exact path="/hamburguesas" element={<Hamburguesas />} /> 
      <Route exact path="/papas" element={<Papas />} />
      <Route exact path="/bebidas" element={<Bebidas />} /> 
      <Route exact path="/detalle" element={<ItemDetailContainer />} />     
    </Routes>
    </>
    </BrowserRouter>
  );
}

export default App;
