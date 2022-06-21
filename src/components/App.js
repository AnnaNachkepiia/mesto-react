import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import api from "../utils/API";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopup] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopup] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopup] = useState(false);
  const [isConfirmPopupOpen, setConfirmPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [card, setCard] = useState([]);

  React.useEffect(() => {
    api
      .getInitialData()
      .then(([userData, card]) => {
        setCurrentUser(userData);
        setCard(card);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleEditProfileClick() {
    setEditProfilePopup(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopup(true);
  }
  function handleEditAvatarClick() {
    setEditAvatarPopup(true);
  }

  //  function handleConfirmClick () {
  //   setConfirmPopup(!isConfirmPopupOpen);
  //  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditProfilePopup(false);
    setAddPlacePopup(false);
    setEditAvatarPopup(false);
    setSelectedCard(null);
  }

  function handleUpdateUser(data) {
    api
      .editUserData(data)
      .then((info) => {
        setCurrentUser(info);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            card={card}
            onCardClick={handleCardClick}
          />
          <Footer />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

          <PopupWithForm
            name="add-card"
            title="Новое место"
            buttonText="Создать"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
          >
            <input
              type="text"
              name="name"
              id="card-name"
              placeholder="Название"
              className="popup__edit-form popup__edit-form_type_card-name"
              minLength={2}
              maxLength={30}
              required
            />
            <span className="popup__text-error" id="card-name-error" />
            <input
              type="url"
              name="link"
              id="link"
              placeholder="Ссылка на картинку"
              className="popup__edit-form popup__edit-form_type_link"
              minLength={6}
              maxLength={200}
              required
            />
            <span className="popup__text-error" id="link-error" />
          </PopupWithForm>

          <ImagePopup card={selectedCard} onClose={closeAllPopups} />

          <PopupWithForm
            name="confirm"
            title="Вы уверены?"
            buttonText="Да"
            isOpen={isConfirmPopupOpen}
            onClose={closeAllPopups}
          ></PopupWithForm>

          <PopupWithForm
            name="update-avatar"
            title="Обновить аватар"
            buttonText="Сохранить"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
          >
            <input
              type="url"
              name="link"
              id="avatar-link"
              placeholder="Ссылка на картинку"
              className="popup__edit-form popup__edit-form_type_link-avatar"
              minLength={6}
              maxLength={200}
              required
            />
            <span className="popup__text-error" id="avatar-link-error" />
          </PopupWithForm>
          <template id="cardTemplate" className="template-place" />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
