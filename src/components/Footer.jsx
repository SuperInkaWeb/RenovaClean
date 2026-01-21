const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">

        {/* LOGO */}
        <div className="footer-logo">
          <img
            src="/assets/icons/LOGO_RENOVA CLEAN-principal.png"
            alt="Renova Clean"
          />
        </div>

        {/* COMPAÑÍA */}
        <div className="footer-column">
          <h4>Compañía</h4>
          <ul>
            <li><a href="#">Sobre nosotros</a></li>
            <li><a href="#">Trabaja con nosotros</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        {/* RECURSOS */}
        <div className="footer-column">
          <h4>Recursos</h4>
          <ul>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>

        {/* AYUDA */}
        <div className="footer-column">
          <h4>Enlaces de ayuda</h4>
          <ul>
            <li><a href="#">Términos y condiciones</a></li>
            <li><a href="#">Políticas de privacidad</a></li>
            <li><a href="#">Política de cookies</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-content">

          <p>
            Copyright © 2025 Renova Clean.
            Todos los derechos reservados.
          </p>

          <div className="footer-social">
            <a href="#">
              <img src="/assets/img/icono facebook.png" alt="Facebook" />
            </a>
            <a href="#">
              <img src="/assets/img/icono instagram.png" alt="Instagram" />
            </a>
            <a href="#">
              <img src="/assets/img/icono whatsapp.png" alt="WhatsApp" />
            </a>
            <a href="#">
              <img src="/assets/img/icono linkedin.png" alt="LinkedIn" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
