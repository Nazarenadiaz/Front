import FormC from "../components/FormC";
import { cambiarTituloPagina } from "../helpers/encabezados";

const Registro = () => {
  cambiarTituloPagina("registrarse");
  return (
    <>
      <div className="d-flex justify-content-center my-5">
        <FormC idPagina="registro" />
      </div>
    </>
  );
};

export default Registro;
