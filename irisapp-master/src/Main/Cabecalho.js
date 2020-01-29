import React from 'react';
import iris_roxo from "./img/iris_roxo.png";
import '../../src/App.css'


export default function Cabecalho() {
  return (
    <body>
    <header>
      <title>IRIS</title> 
      <a  href="/home"><img src={iris_roxo} alt=""/></a>
       <div class="nav">
        <label for="toggle">&#9776;</label>
        <input type="checkbox" id="toggle"/>
        <div class="menu">
          <a href="/manifesto">SObre</a>
            <a href="/manifesto">Manifesto</a>
            <a href="/home">Login</a>
            <a href="/login">Cadastra-se</a>
            <input type="text" id="txtBusca" placeholder="Pesquisar"/>

        </div>
        
    </div>
    
    </header>
    
    
  </body>
  )
}
