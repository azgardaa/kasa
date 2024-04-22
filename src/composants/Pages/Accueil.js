import Box_Accueil from "../composant/Box_Accueil";
import Card_Accueil from "../composant/Card_Accueil";
import data from "../Json/logements.json";
import Image_Accueil from "../image/image_acceuil.png";
import { Link } from "react-router-dom";
const Accroche = "Chez vous, partout et ailleurs";

function Accueil() {
  return (
    <div>
      <Box_Accueil Image={Image_Accueil} Accroche={Accroche} />
      <div className="Box_Appartements">
        {data.map((item) => (
          <Link
            className="Card_Appartement"
            key={item.id}
            to={`/logement/${item.id}`}
          >
            <Card_Accueil title={item.title} cover={item.cover} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Accueil;
