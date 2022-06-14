import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'; 

export const BarraNav = () => {
  return (
    <>
     <Navbar bg="dark" variant="dark">
        <Container>
            <Nav className="me-auto">
              <Nav.Link href="/">Agenda Contacto</Nav.Link>
              <Nav.Link href="/tabla">Tabla Agenda</Nav.Link>
              <Nav.Link href="/formulario"></Nav.Link>
              </Nav>
        </Container>
      </Navbar>
    </>
  );
};
