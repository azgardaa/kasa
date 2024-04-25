import { useParams } from "react-router-dom";
import data from "../Json/logements.json";
import { useEffect, useState } from "react";
import Slider from "../composant/Slider";
import Tags from "../composant/Tags";
import Rating from "../composant/Rating";
import Erreur from "./Erreur";
import Tab from "../composant/Tab";

function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState({
    cover: [],
    pictures: [],
    title: "",
    location: "",
    tags: [],
    host: [],
    rating: [],
    description: "",
    equipments: [],
  });

  useEffect(() => {
    const selectedLogement = data.find((item) => item.id === id);
    if (selectedLogement) {
      setLogement(selectedLogement);
    }
  }, [id]);
  if (logement.id === undefined) {
    return <Erreur />;
  }
  return (
    <div>
      <div>
        <Slider images={logement.pictures} />
      </div>
      <div className="Logement_Box">
        <div className="Logement_Info">
          <h2 className="Logement_Titre">{logement.title}</h2>
          <p className="Logement_Location">{logement.location}</p>
          <Tags tags={logement.tags} />
        </div>
        <div className="Box_Host">
          <div className="Info_Host">
            <p className="Logement_Host">{logement.host.name}</p>
            <img
              className="Picture_Host"
              src={logement.host.picture}
              alt={`Photo de ${logement.host.name}`}
            ></img>
          </div>
          <Rating rating={logement.rating} />
        </div>
      </div>
      <div className="Box_Tab">
        <Tab titre="Description" information={logement.description} />
        <Tab titre="Équipements" information={logement.equipments} />
      </div>
    </div>
  );
}

export default Logement;
