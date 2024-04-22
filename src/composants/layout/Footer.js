import Logo from "../image/logo2.png";

function Footer() {
  return (
    <footer className="Footer">
      <img className="Logo_Footer" src={Logo} alt="Logo Kasa"></img>
      <h2 className="Text_Footer">© 2020 Kasa. All rights reserved</h2>
    </footer>
  );
}

export default Footer;
