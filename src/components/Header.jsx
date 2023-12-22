import LogoMc from "./LogoMc";
import NavBar from "./NavBar";
import PediRetira from "./PediRetira";

const Header = () => {
    return (
        <div className="container my-3">
            <div className="row">
                <div className="col-md-1">
                    <LogoMc tamano={120} />
                </div>
                <div className="col-md-9 d-flex align-items-center">
                    <NavBar />
                </div>
                <div className="col-md-2 d-flex align-items-center justify-content-end">
                    <PediRetira />
                </div>
            </div>
        </div>
    )
}

export default Header;