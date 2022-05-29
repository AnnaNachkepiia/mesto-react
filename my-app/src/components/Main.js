import React from "react";
import Card from "./Card";
import api from "../utils/API";
import editVector from "../../src/images/VectorEdit.svg";


function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = React.useState("");
  const [userAbout, setUserAbout] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialData()
      .then(([userData, item]) => {
        setUserName(userData.name);
        setUserAbout(userData.about);
        setUserAvatar(userData.avatar);
        setCards(item);
      })
      .catch((err) => console.log(err));
  }, []);

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
          <img className="profile__avatar" src={userAvatar} alt="Аватар" />
        </div>
        <div className="profile__info">
          <h1 className="profile__title"> {userName} </h1>
          <button
            type="button"
            style={{ backgroundImage: `url(${editVector})` }}
            className="profile__edit-button"
            onClick={onEditProfile}
          />
          <p className="profile__subtitle"> {userAbout} </p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={onAddPlace}
        />
      </section>
      <section>
        <ul className="places">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
