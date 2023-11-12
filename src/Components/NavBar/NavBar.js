import CartWidget from "../CartWidget/CartWidget";
import logo from '../../images/logo_deepdiving.png'

function generateRandomCantProduct() {
  return Math.floor(Math.random() * 10);
}


function NavBar() {
  return (
    <div classNameName="NavBar">
      <nav
        className="navbar is-success"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="">
            <img
              src={logo}
              width="112"
              height="28"
            />
          </a>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">Inicio</a>

            <a className="navbar-item">Lanzamientos</a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Buceo Deportivo</a>

              <div className="navbar-dropdown">
                <ul>            
                    <li><a className="navbar-item">Aletas</a></li>
                    <li><a className="navbar-item">Chalecos Compensadores</a></li>
                    <li><a className="navbar-item">Computadoreas</a></li>
                    <li><a className="navbar-item">Máscaras y Snokerls</a></li>
                    <li><a className="navbar-item">Reguladores</a></li>
                    <li><a className="navbar-item">Trajes de Neoprene</a></li>
                    <hr className="navbar-divider" />
                    <li><a className="navbar-item">Todos</a></li>
                </ul>
              </div>
            </div>
            <a className="navbar-item">Contacto</a>  
          </div>
          

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-white">
                  <CartWidget cantProductCart={generateRandomCantProduct()} />
                </a>
                <a className="button is-info ">Pablo Rivero</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
