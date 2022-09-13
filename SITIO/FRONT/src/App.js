import './App.css';
import React from 'react';
import Header from './componentes/Header';
import Carro from './componentes/Carro';
import Precios from './componentes/precios';
import Tiradas from './componentes/Tiradas';
import Pagos from './componentes/Pagos';
import Contacto from './componentes/Contacto';
import Nosotros from './componentes/Nostros';
import Footer from './componentes/Footer';
function App() {
  return (
    <div>
      <Header></Header>
      <Carro></Carro>
      <Precios></Precios>
      <Tiradas></Tiradas>
      <Pagos></Pagos>
      <Contacto></Contacto>
      <Nosotros></Nosotros>
      <Footer></Footer>
    </div>
   
  );
}

export default App;
