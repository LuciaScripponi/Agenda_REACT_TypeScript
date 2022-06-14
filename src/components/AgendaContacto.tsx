import React, { useEffect, useState } from "react";
import { BarraNav } from "./BarraNav";
import "bootstrap/dist/css/bootstrap.css";
import Contacto from "./Contacto";
import { getContactosXindiceFetch } from "./FuncionesAPI";
import { useParams } from "react-router-dom";
import { Row } from "react-bootstrap";

export const AgendaContacto = () => {
  const { letra } = useParams();
  const [contactos, setContactos] = useState<Contacto[]>([]);

  const getContactos = async () => {
    console.log("TERMINO " + letra);

    if (letra && letra != "") {
      let datos: Contacto[] = await getContactosXindiceFetch(letra);
      setContactos(datos);
    } else {
      let datos: Contacto[] = await getContactosXindiceFetch("A");
      setContactos(datos);
    }
  };

  //RENDERIZO
  useEffect(() => {
    getContactos();
  }, []);

  return (
    <>
      <BarraNav></BarraNav>
      <h1>Agenda de Contactos</h1>

      <div className="grid-container-agenda">
        <div className="grid-item-agenda">Foto</div>
        <div className="grid-item-agenda">Apellido</div>
        <div className="grid-item-agenda">Nombre</div>
        <div className="grid-item-agenda">Telefono</div>
        <div className="grid-item-agenda">Email</div>
      </div>
      {contactos.map((contacto: Contacto) => (
       
          <Row key={contacto.id}>
            <div className="grid-item">
              <img src="https://img.a.transfermarkt.technology/portrait/big/281963-1569907038.jpg?lm=1" />
            </div>
            <div className="grid-item">{contacto.apellido}</div>
            <div className="grid-item">{contacto.nombre}</div>
            <div className="grid-item">{contacto.telefono}</div>
            <div className="grid-item">{contacto.email}</div>
          </Row>
      ))}

      <h3>Busqueda por Indice</h3>
      <div className="grid-container">
        <div className="grid-item">
          <a href="/A">A</a>
        </div>
        <div className="grid-item">
          <a href="/B">B</a>
        </div>
        <div className="grid-item">
          <a href="/C">C</a>
        </div>
        <div className="grid-item">
          <a href="/D">D</a>
        </div>
        <div className="grid-item">
          <a href="/E">E</a>
        </div>
        <div className="grid-item">
          <a href="/F">F</a>
        </div>
        <div className="grid-item">
          <a href="/G">G</a>
        </div>
        <div className="grid-item">
          <a href="/H">H</a>
        </div>
        <div className="grid-item">
          <a href="/I">I</a>
        </div>
        <div className="grid-item">
          <a href="/J">J</a>
        </div>
        <div className="grid-item">
          <a href="/K">K</a>
        </div>
        <div className="grid-item">
          <a href="/L">L</a>
        </div>
        <div className="grid-item">
          <a href="/M">M</a>
        </div>
        <div className="grid-item">
          <a href="/N">N</a>
        </div>
        <div className="grid-item">
          <a href="/Ñ">Ñ</a>
        </div>
        <div className="grid-item">
          <a href="/O">O</a>
        </div>
        <div className="grid-item">
          <a href="/P">P</a>
        </div>
        <div className="grid-item">
          <a href="/Q">Q</a>
        </div>
        <div className="grid-item">
          <a href="/R">R</a>
        </div>
        <div className="grid-item">
          <a href="/S">S</a>
        </div>
        <div className="grid-item">
          <a href="/T">T</a>
        </div>
        <div className="grid-item">
          <a href="/U">U</a>
        </div>
        <div className="grid-item">
          <a href="/V">V</a>
        </div>
        <div className="grid-item">
          <a href="/W">W</a>
        </div>
        <div className="grid-item">
          <a href="/X">X</a>
        </div>
        <div className="grid-item">
          <a href="/Y">Y</a>
        </div>
        <div className="grid-item">
          <a href="/Z">Z</a>
        </div>
      </div>
    </>
  );
};
