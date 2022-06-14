import React, { useEffect, useState } from "react";
import { BarraNav } from "./BarraNav";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Contacto from "./Contacto";
import { getContactosJSONFetch, saveContacto } from "./FuncionesAPI";

export const FormularioAgenda = () => {
  const navigate = useNavigate();

  const { idContacto } = useParams();
  const [contacto, setContacto] = useState<Contacto>(new Contacto());

  const getContacto = async () => {
    if (Number(idContacto) !== 0) {
      let datos: Contacto[] = await getContactosJSONFetch();

      let contactoSelect: Contacto | undefined = datos.find(
        (item) => item.id == Number(idContacto)
      );
      if (contactoSelect) {
        setContacto(contactoSelect);
      }
    } else {
      let contactoSelect: Contacto = new Contacto();
      setContacto(contactoSelect);
    }
  };

  //RENDERIZO
  useEffect(() => {
    getContacto();
  }, []);

  const save = async () => {
    await saveContacto(contacto);
    navigate("/tabla");
  };

  return (
    <>
      <BarraNav></BarraNav>
      <div className="center">
        <Form className="form-control">
          <Form.Group className="mb-3" controlId="formBasicNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="Text"
              placeholder="Ingrese el nombre"
              defaultValue={contacto?.nombre}
              onChange={(e) => (contacto.nombre = String(e.target.value))}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicMarca">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="Text"
              placeholder="Ingrese el apellido"
              defaultValue={contacto?.apellido}
              onChange={(e) => (contacto.apellido = String(e.target.value))}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicModelo">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              type="Text"
              placeholder="Ingrese el telefono"
              defaultValue={contacto?.telefono}
              onChange={(e) => (contacto.telefono = Number(e.target.value))}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicImagen">
            <Form.Label>Foto</Form.Label>
            <Form.Control
              type="Text"
              placeholder="Ingrese la foto"
              defaultValue={contacto?.foto_url}
              onChange={(e) => (contacto.foto_url = String(e.target.value))}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPrecio">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="Text"
              placeholder="Ingrese el correo electronico"
              defaultValue={contacto?.email}
              onChange={(e) => (contacto.email = String(e.target.value))}
            />
          </Form.Group>
          <br />
          <br />
          <br />
          <Button onClick={save} variant="primary" type="button">
            Guardar
          </Button>
        </Form>
      </div>
    </>
  );
};
