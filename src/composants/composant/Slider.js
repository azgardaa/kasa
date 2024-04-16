import { useState } from "react";
import Arrow from "../image/arrow.png";

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(0);

  const nextImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="Box_Slider">
      <img src={Arrow} className="Bouton_SliderG" onClick={prevImage}></img>
      <img
        className="Image_Slider"
        src={images[imageIndex]}
        alt={`Image ${imageIndex}`}
      />
      <img src={Arrow} className="Bouton_SliderD" onClick={nextImage}></img>
    </div>
  );
}

export default Slider;
