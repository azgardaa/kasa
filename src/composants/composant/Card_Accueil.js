function Card_Accueil({ id, title, cover }) {
  return (
    <div className="Appartement" key={id}>
      <img
        className="Cover_Appartement"
        src={cover}
        alt={`${title} cover`}
      ></img>
      <h2 className="Titre_Appartement">{title}</h2>
    </div>
  );
}

export default Card_Accueil;
