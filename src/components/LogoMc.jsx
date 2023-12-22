import Logo from "../assets/mcdonalds-logo-footer-bg-white.png";

const LogoMc = ({tamano}) => {
    return (
        <img src={Logo} alt="McDonalds Argentina" width={tamano} />
    )
}

export default LogoMc;