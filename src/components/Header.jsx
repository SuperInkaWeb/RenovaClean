import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const { hash, pathname } = useLocation();

  const isActive = (section) =>
    pathname === "/" && hash === section;

  return (
    <header className="header">
      <div className="header-container">

        <div className="header-logo">
          <img
            src="/assets/icons/LOGO_RENOVA CLEAN_solo texto.png"
            alt="Renova Clean"
          />
        </div>

        <nav className="header-nav">
          <ul>
            <li>
              <Link
                to="/#nosotros"
                className={isActive("#nosotros") ? "active" : ""}
              >
                Nosotros
              </Link>
            </li>

            <li>
              <Link
                to="/#servicios"
                className={isActive("#servicios") ? "active" : ""}
              >
                Servicios
              </Link>
            </li>

            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                Blog
              </NavLink>
            </li>

            <li>
              <Link
                to="/#clientes"
                className={isActive("#clientes") ? "active" : ""}
              >
                Clientes
              </Link>
            </li>

            <li>
              <Link
                to="/#contacto"
                className={isActive("#contacto") ? "active" : ""}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;
