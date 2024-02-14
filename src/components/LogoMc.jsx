import { Link } from "react-router-dom";
import Logo from "../assets/mcdonalds-logo-footer-bg-white.png";

const LogoMc = ({tamano}) => {
    return (
        <Link to={"/"}>
            <img src={Logo} alt="McDonalds Argentina" width={tamano} />
        </Link>
    )
}

export default LogoMc;