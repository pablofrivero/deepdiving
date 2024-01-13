import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../images/logo_deepdiving.png";

function Navbar() {
  const [openModule, setOpenModule] = useState(null);

  const handleModuleToggle = (moduleName) => {
    setOpenModule(openModule === moduleName ? null : moduleName);
  };

  const closeDropdown = () => {
    setOpenModule(null);
  };

  return (
    <nav className="bg-gray-800 text-white flex justify-between items-center py-3 px-5 z-0">
      <Link className="navbar-item hoverable" to="/">
        <img src={logo} width="112" height="28" alt="deepdiving" />
      </Link>
      <ul className="flex items-center text-sm space-x-10 text-gray-300 z-10">
        <li
          className={`relative group text-lg ${
            openModule === "buceo" ? "open" : ""
          }`}
        >
          <Link
            className="navbar-link"
            onClick={() => handleModuleToggle("buceo")}
          >
            Buceo Deportivo
          </Link>
          <div
            className={`${
              openModule === "buceo" ? "block" : "hidden"
            } absolute left-0 mt-2 space-y-2 bg-gray-800 text-white p-2 rounded-md`}
          >
            <Link
              className="navbar-item block"
              to="/category/buceo-aletas"
              onClick={closeDropdown}
            >
              Aletas
            </Link>
            <Link
              className="navbar-item block"
              to="/category/buceo-chalecos"
              onClick={closeDropdown}
            >
              Chalecos Compensadores
            </Link>
            <Link
              className="navbar-item block"
              to="/category/buceo-computadoras"
              onClick={closeDropdown}
            >
              Computadoras
            </Link>
            <Link
              className="navbar-item block"
              to="/category/buceo-mascaras"
              onClick={closeDropdown}
            >
              Máscaras
            </Link>
            <Link
              className="navbar-item block"
              to="/category/buceo-snorkels"
              onClick={closeDropdown}
            >
              Snorkels
            </Link>
            <Link
              className="navbar-item block"
              to="/category/buceo-reguladores"
              onClick={closeDropdown}
            >
              Reguladores
            </Link>
            <Link
              className="navbar-item block"
              to="/category/buceo-trajes-neoprene"
              onClick={closeDropdown}
            >
              Trajes de Neoprene
            </Link>
          </div>
        </li>
        <li
          className={`relative group text-lg ${
            openModule === "apnea" ? "open" : ""
          }`}
        >
          <Link
            className="navbar-link"
            onClick={() => handleModuleToggle("apnea")}
          >
            Apnea
          </Link>
          <div
            className={`${
              openModule === "apnea" ? "block" : "hidden"
            } absolute left-0 mt-2 space-y-2 bg-gray-800 text-white p-2 rounded-md`}
          >
            <Link
              className="navbar-item block"
              to="/category/apnea-aletas"
              onClick={closeDropdown}
            >
              Aletas
            </Link>
            <Link
              className="navbar-item block"
              to="/category/apnea-boyas"
              onClick={closeDropdown}
            >
              Boyas
            </Link>
            <Link
              className="navbar-item block"
              to="/category/apnea-neoprene"
              onClick={closeDropdown}
            >
              Trajes de Neoprene
            </Link>
          </div>
        </li>
        <li className="text-lg">
          <Link className="navbar-item" to="/contacto">
            Contacto
          </Link>
        </li>
      </ul>
      <div className="flex items-center space-x-5">
        <Link className="button is-white" to="/cart">
          <CartWidget />
        </Link>
        <Link className="button is-info">Pablo Rivero</Link>
      </div>
    </nav>
  );
}

export default Navbar;
