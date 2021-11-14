import React from "react";
import { Route } from "react-router";
import Eventos from "./Eventos";
import Home from "./Home";
import ListaCursos from "./ListaCursos";

function Main() {
  return (
    <main className="main">
      {/* <Home /> */}
      <Route exact path="/" component={Home} />
      {/* <ListaCursos /> */}
      <Route exact path="/Cursos" component={ListaCursos}/>
      {/* <Eventos /> */}
      <Route exact path="/Eventos" component={Eventos}/>
    </main>
  );
}

export default Main;
