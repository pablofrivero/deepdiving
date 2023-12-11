import CartWidget from "../CartWidget/CartWidget";
import logo from '../../images/logo_deepdiving.png'
import { Link } from "react-router-dom";

function generateRandomCantProduct() {
  return Math.floor(Math.random() * 10);
}


function NavBar() {
  return (
    <div className="NavBar">
      <nav
        className="navbar is-success"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
        <Link className="navbar-item hoverable" to="/">
            <img
              src={logo}
              width="112"
              height="28"
            />
          </Link>

          <Link
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Link>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start is-spaced is-marginless">
            <Link className="navbar-item" to="/">Inicio</Link>

            <div className="navbar-item has-dropdown is-hoverable">
              <Link className="navbar-link">Buceo Deportivo</Link>

              <div className="navbar-dropdown">
                <ul>            
                    <li><Link className="navbar-item" to="/category/buceo-aletas">Aletas</Link></li>
                    <li><Link className="navbar-item" to="/category/buceo-chalecos">Chalecos Compensadores</Link></li>
                    <li><Link className="navbar-item" to="/category/buceo-computadoras">Computadoras</Link></li>
                    <li><Link className="navbar-item" to="/category/buceo-mascaras">Máscaras</Link></li>
                    <li><Link className="navbar-item" to="/category/buceo-snorkels">Snorkels</Link></li>
                    <li><Link className="navbar-item" to="/category/buceo-reguladores">Reguladores</Link></li>
                    <li><Link className="navbar-item" to="/category/buceo-trajes-neoprene">Trajes de Neoprene</Link></li>
                  
                </ul>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link className="navbar-link">Apnea</Link>

              <div className="navbar-dropdown">
                <ul>            
                    <li><Link className="navbar-item" to="/category/apnea-aletas">Aletas</Link></li>
                    <li><Link className="navbar-item" to="/category/apnea-boyas">Boyas</Link></li>
                    <li><Link className="navbar-item" to="/category/apnea-neoprene">Trajes de Neoprene</Link></li>
      a
                </ul>
              </div>
            </div>
            <Link className="navbar-item" to="/contacto">Contacto</Link>  
          </div>
          

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link className="button is-white">
                  <CartWidget cantProductCart={generateRandomCantProduct()} />
                </Link>
                <Link className="button is-info ">Pablo Rivero</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
