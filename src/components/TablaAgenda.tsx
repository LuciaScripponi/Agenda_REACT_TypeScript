import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BarraNav } from "./BarraNav";
import { Button, Col, Row } from "react-bootstrap";
import Contacto from "./Contacto";
import { deleteContactoPorId, getContactosJSONFetch } from "./FuncionesAPI";

export const TablaAgenda = () => {
  const [contactos, setContactos] = useState<Contacto[]>([]);

  const getContactos = async () => {
    let datos: Contacto[] = await getContactosJSONFetch();
    setContactos(datos);
  };

  //RENDERIZO
  useEffect(() => {
    getContactos();
  }, []);

  const deleteContacto = async (idContacto: number) => {
    await deleteContactoPorId(idContacto);
   window.location.reload();
  };

  return (
    <>
      <BarraNav></BarraNav>
      <h1>TABLA AGENDA</h1>

      <Button variant="primary" href={`/formulario/0`}>Nuevo</Button>
      <Row>

        <Col md={0}>
          <b>Apellido</b>
        </Col>

        <Col md={2}>
          <b>Nombre</b>
        </Col>

        <Col md={2}>
          <b>Telefono</b>
        </Col>

        <Col md={3}>
          <b>Email</b>
        </Col>

        <Col md={1}>
          <b>Modificar</b>
        </Col>

        <Col md={1}>
          <b>Eliminar</b>
        </Col>
      </Row>
      {contactos.map((contacto: Contacto) => (
        <Row key={contacto.id}>
          <Col md={0}>{contacto.apellido}</Col>
          <Col md={2}>{contacto.nombre}</Col>
          <Col md={2}>{contacto.telefono}</Col>
          <Col md={3}>{contacto.email}</Col>
          <Col md={1}>
            <Button
              variant="outline-warning"
              href={`/formulario/` + contacto.id}
            >
              Modificar
            </Button>
          </Col>
          <Col md={1}>
            <Button
              variant="outline-danger"
              onClick={() => deleteContacto(contacto.id)}
            >
              Eliminar
            </Button>
          </Col>
        </Row>
      ))}
    </>
  );
};
