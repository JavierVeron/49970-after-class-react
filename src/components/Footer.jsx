import Apple from "../assets/app_store_3x_d293084ca1.png";
import Android from "../assets/disponible_google_play_3x_c977cae3bc.png";
import LogoMc from "./LogoMc";

const Footer = () => {
    return (
        <div className="container my-3">
            <div className="row my-3">
                <div className="col">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-5" href="#">[FB]</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-5" href="#">[IG]</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-5" href="#">[TW]</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-5" href="#">[YT]</a>
                        </li>
                    </ul>
                </div>
                <div className="col text-end">
                    <a href="#" className="mx-1"><img src={Apple} width={115} alt={"Apple"} /></a>
                    <a href="#"><img src={Android} width={128} alt={"Android"} /></a>
                </div>
            </div>
            <hr />
            <div className="row my-3">
                <div className="col-md-10">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link text-secondary fs-6" href="#">Política de Privacidad</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary fs-6" href="#">Defensa del Consumidor</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary fs-6" href="#">Protección de datos personales</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary fs-6" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <p><LogoMc tamano={40} /> © McDonald's 2023</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;