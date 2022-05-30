import React from "react";

function ImagePopup({ card, onClose }) {
  return (
    <div
      className={`popup popup_type_open-image ${card ? "popup_is-opened" : ""}`}
    >
      <div className="popup__picture-container">
        <button
          onClick={onClose}
          type="button"
          className="popup__close popup__close_img"
        />
        <figure className="popup__picture">
          <img
            className="popup__fulled-img"
            src={card ? card.link : ""}
            alt={card ? card.name : ""}
          />
          <figcaption className="popup__picture-title">
            {card ? card.name : ""}
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
