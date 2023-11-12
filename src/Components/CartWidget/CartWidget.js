import {IoCartOutline } from "react-icons/io5";

function CartWidget(props) {
  const {cantProductCart}=props;
  return(
      <span className="icon-text">
        <span className="icon">
          <IoCartOutline/>      
        </span>
      <span><strong>{cantProductCart}</strong></span>
    </span>
  )
}
export default CartWidget;