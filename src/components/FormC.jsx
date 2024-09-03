import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormC = ({ idPagina }) => {
  const [formRegister, setFormRegister] = useState({});
  const [errores, setErrores] = useState({});

  const handleChange = (ev) => {
    setFormRegister({ ...formRegister, [ev.target.name]: ev.target.value });
  };

  const handleClick = (ev) => {
    ev.preventDefault();

    if (!formRegister.nombre) {
      setErrores({ ...errores, nombre: true });
    }

    if (!formRegister.usuario) {
      setErrores({ ...errores, usuario: true });
    }

    if (!formRegister.contrasenia) {
      setErrores({ ...errores, contrasenia: true });
    }

    if (!formRegister.rcontrasenia) {
      setErrores({ ...errores, rcontrasenia: true });
    }

    if (
      formRegister.nombre &&
      formRegister.usuario &&
      formRegister.contrasenia &&
      formRegister.rcontrasenia
    ) {
      const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
      const usuarioExiste = usuarios.find(
        (usuario) => usuario.nombreUsario === formRegister.usuario
      );

      if (usuarioExiste) {
        return alert("usuario vacio");
      }

      if (formRegister.contrasenia === formRegister.rcontrasenia) {
        const nuevoUsuario = {
          id: usuarios[usuarios.length - 1]?.id + 1 || 1,
          nombreUsario: formRegister.usuario,
          contrasenia: formRegister.contrasenia,
          nombre: formRegister.nombre,
          rol: "usuario",
          bloqueado: false,
          login: false,
        };

        usuarios.push(nuevoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        setTimeout(() => {
          navigate("/inicio-sesion");
        });
      } else {
        alert("Las contraseñas no son iguales");
      }
    }
  };

  return (
    <>
      <Form className="formulario">
        <h2 className="mt-3 py-3">Registrate en FITNATION 💪</h2>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            name="nombre"
            type="text"
            placeholder="Nombre"
            onChange={handleChange}
            className={
              errores.nombre ? "form-control is-invalid" : "form-control"
            }
          />
          {errores.nombre && <p className="text-danger"> campo nombre vacio</p>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo Electronico</Form.Label>
          <Form.Control
            name="usuario"
            type="text"
            placeholder="FitNation@gmail.com"
            onChange={handleChange}
            className={
              errores.usuario ? "form-control is-invalid" : "form-control"
            }
          />
          {errores.usuario && (
            <p className="text-danger"> campo correo electronico vacio</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            name="contrasenia"
            type="password"
            placeholder="contraseña"
            onChange={handleChange}
            className={
              errores.contrasenia ? "form-control is-invalid" : "form-control"
            }
          />
          {errores.contrasenia && (
            <p className="text-danger"> campo contraseña vacio</p>
          )}
        </Form.Group>

        {idPagina === "registro" && (
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label> Repetir Contraseña</Form.Label>
            <Form.Control
              name="rcontrasenia"
              type="password"
              placeholder="repetir contraseña"
              onChange={handleChange}
              className={
                errores.rcontrasenia
                  ? "form-control is-invalid"
                  : "form-control"
              }
            />
            {errores.rcontrasenia && (
              <p className="text-danger"> campo repetir contraseña vacio</p>
            )}
          </Form.Group>
        )}

        <Button variant="dark" type="submit" onClick={handleClick}>
          {idPagina === "registro" ? "Registrarse" : "Iniciar Sesion"}
        </Button>
      </Form>
    </>
  );
};

export default FormC;
