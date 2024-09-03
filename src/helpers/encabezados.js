/* aqui va funciones de js puro */
export const cambiarTituloPagina = (nombrePagina) => {
  switch (nombrePagina) {
    case "paginaPrincipal":
      document.title = "pagina principal";
      break;
    case "sobreNosotros":
      document.title = "Sobre Nosotros";
      break;

    case "contacto":
      document.title = "Contacto";
      break;

    case "inicioDeSesion":
      document.title = "Inicio de Sesion";
      break;

    case "registrarse":
      document.title = "Registrarse ";
      break;

    default:
      document.title = "ERROR";
      break;
  }
};
