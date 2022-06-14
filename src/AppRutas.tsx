import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { AgendaContacto } from "./components/AgendaContacto";
import { TablaAgenda } from "./components/TablaAgenda";
import { FormularioAgenda } from "./components/FormularioAgenda";

class AppRutas extends Component {

    render() {
  
      return (
        <Routes>
          <Route path="/" element={<AgendaContacto/>} />
          <Route path="/:letra" element={<AgendaContacto/>} />
          <Route path="/tabla" element={<TablaAgenda/>} /> 
          <Route path="/formulario/:idContacto" element={<FormularioAgenda/>} />         
        </Routes>
      );
    }
  }
  
  export default AppRutas;