import { useParams } from "react-router-dom";
import data from "../Json/logements.json";
import { useEffect, useState } from "react";
import Slider from "../composant/Slider";

function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState({
    cover: [],
    pictures: [],
  });

  useEffect(() => {
    const selectedLogement = data.find((item) => item.id === id);
    if (selectedLogement) {
      setLogement(selectedLogement);
    }
  }, [id]);

  return (
    <div>
      <div>
        <Slider images={logement.pictures} />
      </div>
    </div>
  );
}

export default Logement;
