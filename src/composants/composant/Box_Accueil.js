import Image_Accueil from "../image/image_acceuil.png";

function Box_Accueil() {
  return (
    <div className="Box_Accueil">
      <img className="Image_Accueil" src={Image_Accueil}></img>
      <div className="Text_Accueil">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  );
}

export default Box_Accueil;
