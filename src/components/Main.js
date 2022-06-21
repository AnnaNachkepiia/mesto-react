import React from "react";
import Card from "./Card";
import api from "../utils/API";
import editVector from "../../src/images/VectorEdit.svg";
import { CurrentUserContext } from "../contexts/CurrentUserContext";


function Main({ onEditProfile, onAddPlace, onEditAvatar, card, onCardClick}) {
const currentUser = React.useContext(CurrentUserContext);

  // const [userName, setUserName] = React.useState("");
  // const [userAbout, setUserAbout] = React.useState("");
  // const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch(err => console.log(err));

}

function handleCardDelete(card) {
  api.deleteCard(card._id)
  .then(() => {
    setCards(cards => cards.filter((c) => c._id !== card._id));
  })
  .catch(err => console.log(err));

}
 

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
            <Card key={card._id} card={card} onCardClick={onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
