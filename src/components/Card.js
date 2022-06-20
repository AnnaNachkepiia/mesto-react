import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `${
    isOwn ? "place__delete-button_active" : "place__delete-button"}`
  );
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `place__like-button ${
    isLiked ? "place__like-button_active" : ""}`
    );

  const handleCardClick = () => {
    onCardClick(card);
  };

  const handleLikeClick = () => {
    onCardLike(card)
  };

  const handleDeleteClick =() => {
    onCardDelete(card);
  }


  return (
    <li className="place">
      <img
        onClick={handleCardClick}
        className="place__image"
        src={`${card.link}`}
        alt={`${card.name}`}
      />
      <div className="place__description">
        <h2 className="place__title">{card.name}</h2>
        <div className="place__like-container">
          <button type="button" className={cardLikeButtonClassName} onCardLike={handleLikeClick}></button>
          <p className="place__like-counter">{card.likes.length}</p>
        </div>
      </div>
      <button type="button" className={cardDeleteButtonClassName}></button>
    </li>
  );
}

export default Card;
