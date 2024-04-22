import React, { useState } from "react";
import Arrow from "../image/arrow_back.svg";

function Tab({ titre, information }) {
  const [info, setInfo] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleButtonClick = () => {
    setInfo(info ? null : information);
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="Tab">
      <div className="Bouton_Tab">
        <label className="Label_Tab">{titre}</label>
        <button onClick={handleButtonClick}>
          <img
            className={isFlipped ? "flipped" : "notflipped"}
            src={Arrow}
            alt="Arrow"
          />
        </button>
      </div>
      {info && (
        <p className="info show" key={information}>
          {Array.isArray(info)
            ? info.map((item, index) => (
                <React.Fragment key={index}>
                  {typeof item === "string" ? (
                    <>
                      {item}
                      <br />
                    </>
                  ) : (
                    item
                  )}
                </React.Fragment>
              ))
            : info}
        </p>
      )}
    </div>
  );
}

export default Tab;
