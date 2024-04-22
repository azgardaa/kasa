import Image_Apropos from "../image/image_apropos.png";
import data from "../Json/A-Propos.json";
import { useEffect, useState } from "react";
import Tab from "../composant/Tab";

function A_Propos() {
  const [information, setInformation] = useState({
    fiabilite: "",
    respect: "",
    service: "",
    securite: "",
  });

  useEffect(() => {
    if (data.length > 0) {
      setInformation(data[0]);
    }
  }, []);
  return (
    <div className="Box_Apropos">
      <img className="Image_Apropos" src={Image_Apropos} alt="À Propos"></img>
      <Tab titre="Fiabilité" information={information.fiabilite} />
      <Tab titre="Respect" information={information.respect} />
      <Tab titre="Service" information={information.service} />
      <Tab titre="Sécurité" information={information.securite} />
    </div>
  );
}

export default A_Propos;
