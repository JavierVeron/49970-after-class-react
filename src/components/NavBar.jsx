import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import LogoMc from "./LogoMc";

const NavBar = () => {
    return (
        <div className="container my-3">
            <div className="row">
                <div className="col-md-1">
                    <LogoMc tamano={120} />
                </div>
                <div className="col-md-10 d-flex align-items-center">
                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fs-5" activeclassname="active" to={"/"}>Productos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fs-5" activeclassname="active" to={"/category/hamburguesas"}>Hamburguesas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fs-5" activeclassname="active" to={"/category/papas"}>Papas Fritas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fs-5" activeclassname="active" to={"/category/bebidas"}>Bebidas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fs-5" activeclassname="active" to={"/category/postres"}>Postres</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="col-md-1 d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar;