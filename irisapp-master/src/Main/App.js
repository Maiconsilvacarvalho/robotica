import React from "react";
import { BrowserRouter } from "react-router-dom";
import '../../src/App.css'

import Cabecalho from "./Cabecalho";
import Routes from "./Routes";
import Rodape from "./Rodape";

export default function App() {
  return (
    <BrowserRouter>
      <body>
        <Cabecalho />
        <Routes />
        <Rodape />
      </body>
    </BrowserRouter>
  );
}