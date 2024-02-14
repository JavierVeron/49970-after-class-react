import { useContext } from "react";
import iconCart from "../assets/cart.svg";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {CantTotalProductos} = useContext(CartContext);

    return (
        CantTotalProductos() > 0 ? <Link to={"/cart"} className="btn btn-warning position-relative">
            <img src={iconCart} alt="Carrito" width={24} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{CantTotalProductos()}</span>
        </Link> : ""
    )
}

export default CartWidget;