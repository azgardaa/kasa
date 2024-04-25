function Box_Accueil({ Image, Accroche }) {
  return (
    <div className="Box_Accueil">
      <img className="Image_Accueil" src={Image} alt="Page d'acceuil"></img>
      <div className="Text_Accueil">
        <h1>{Accroche}</h1>
      </div>
    </div>
  );
}

export default Box_Accueil;
