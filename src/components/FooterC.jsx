import logoo from "../img/logoo.jpeg";

const Footer = () => {
  return (
    <>
      <footer className="d-flex justify-content-between align-items-center mt-5 p-3">
        <div>
          <a className="navbar-brand" href="#">
            <img src={logoo} alt="logo" width="150" />
          </a>
        </div>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="">
                Facebook
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="">
                Instragram
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="">
                Youtube
              </a>
            </li>
          </ul>
        </div>
        <ul>
          <li className="nav-item">
            <a className="nav-link active" href="">
              Trabaja con nosotros
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="">
              conctato
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="">
              terminos y condiciones
            </a>
          </li>
        </ul>

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1060695694587!2d-65.21178042654236!3d-26.836578438494723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1723577280948!5m2!1ses-419!2sar"
            width="250"
            height="250"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </footer>
    </>
  );
};

export default Footer;
