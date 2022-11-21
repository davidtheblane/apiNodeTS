import React from 'react';
import logo from '../assets/images/logo.svg';

function header(){
  return (
    <header>
      <div className="page-details">
        <h1>Pedidos</h1>
        <h2>Acompanhe os pedidos dos clientes</h2>
        <img src={logo} alt="WAITER APP" />
      </div>
    </header>
  );
}

export default header;
