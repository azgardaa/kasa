import { Link } from "react-router-dom";
import logo from "../image/logo.png";

function Header() {
  return (
    <div className="Header">
      <img src={logo} alt="Logo du site kasa"></img>
      <nav className="Link">
        <Link to="/">Accueil</Link>
        <Link to="/A_Propos">A Propos</Link>
        <Link to="/Logement">logements</Link>
      </nav>
    </div>
  );
}
export default Header;
