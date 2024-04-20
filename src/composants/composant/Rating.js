function Rating({ rating, starA, starNA }) {
  const renderStar = (index) => {
    return index <= rating ? (
      <img key={index} className="star" src={starA} alt="Etoile pleine"></img>
    ) : (
      <img key={index} className="star" src={starNA} alt="Etoile vide"></img>
    );
  };

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(renderStar(i));
  }

  return <div className="Rating">{stars}</div>;
}

export default Rating;
