import React from "react";
import Card from "./Card";
import api from "../utils/API";
import editVector from "../../src/images/VectorEdit.svg";
import { CurrentUserContext } from "../contexts/CurrentUserContext";


function Main({ onEditProfile, onAddPlace, onEditAvatar, card, onCardClick, onCardLike, onCardDelete}) {
const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            className="profile__avatar-edit"
            src={editVector}
            alt="Редактировать профиль"
            onClick={onEditAvatar}
          />
          <img className="profile__avatar" src={currentUser.avatar} alt="Аватар" />
        </div>
        <div className="profile__info">
          <h1 className="profile__title"> {currentUser.name} </h1>
          <button
            type="button"
            style={{ backgroundImage: `url(${editVector})` }}
            className="profile__edit-button"
            onClick={onEditProfile}
          />
          <p className="profile__subtitle"> {currentUser.about} </p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={onAddPlace}
        />
      </section>
      <section>
        <ul className="places">
          {card.map((card) => (
            <Card key={card._id} card={card} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete}/>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
