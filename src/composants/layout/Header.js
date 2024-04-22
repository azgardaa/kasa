import { Link, useLocation } from "react-router-dom";
import logo from "../image/logo.png";

function Header() {
  const location = useLocation();

  return (
    <div className="Header">
      <Link to="/">
        <img src={logo} alt="Logo du site kasa"></img>
      </Link>
      <nav className="Link">
        <Link to="/" className={location.pathname === "/" ? "Active" : ""}>
          Accueil
        </Link>
        <Link
          to="/A_Propos"
          className={location.pathname === "/A_Propos" ? "Active" : ""}
        >
          A Propos
        </Link>
      </nav>
    </div>
  );
}

export default Header;
