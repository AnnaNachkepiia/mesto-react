import React from "react";

function Card({card, onCardClick}) {
const handleCardClick = ()=> {
 onCardClick(card);
}

  return (
      <li className="place">
        <img onClick={handleCardClick}
        className="place__image" src={`${card.link}`} alt={`${card.name}`} />
        <div className="place__description">
          <h2 className="place__title">{card.name}</h2>
          <div className="place__like-container">
            <button type="button" className="place__like-button"></button>
            <p className="place__like-counter">{card.likes.length}</p>
          </div>
        </div>
        <button type="button" className="place__delete-button"></button>
      </li>
  );
}

export default Card;
