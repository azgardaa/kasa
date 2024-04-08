import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1> Logo</h1>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/A_Propos">A Propos</Link>
      </nav>
    </div>
  );
}
export default Header;
