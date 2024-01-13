import {IoCartOutline } from "react-icons/io5";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function CartWidget() {
  const {cantidadTotal}=useContext(CartContext);
  
  if(cantidadTotal> 0) {
    return (
      <div className="relative">
        <Link className="menu-link underline-none" to="/cart">
          <span className="icon-text">
            <span className="icon text-white text-2xl relative">
              <IoCartOutline />
              {cantidadTotal > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-300 rounded-full text-white text-xs px-2">
                  <strong>{cantidadTotal}</strong>
                </span>
              )}
            </span>
          </span>
        </Link>
      </div>
    );
    
}}

export default CartWidget;