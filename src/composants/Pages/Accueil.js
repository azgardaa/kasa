import Box_Accueil from "../composant/Box_Accueil";
import Card_Accueil from "../composant/Card_Acceuil";
import data from "../Json/logements.json";

function Accueil() {
  console.log(data);
  return (
    <div>
      <Box_Accueil />
      <div className="Box_Appartements">
        {data.map((item) => (
          <Card_Accueil key={item.id} title={item.title} cover={item.cover} />
        ))}
      </div>
    </div>
  );
}

export default Accueil;
