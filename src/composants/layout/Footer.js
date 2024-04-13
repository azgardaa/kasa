import Logo from "../image/logo.png";

function Footer() {
  return (
    <div className="Footer">
      <img className="Logo_Footer" src={Logo} alt="Logo Kasa"></img>
      <h2 className="Text_Footer">© 2020 Kasa. All rights reserved</h2>
    </div>
  );
}

export default Footer;
