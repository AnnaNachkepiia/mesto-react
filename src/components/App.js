import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";

function App() {
const [isEditProfilePopupOpen, setEditProfilePopup] = useState(false)
const [isAddPlacePopupOpen, setAddPlacePopup] = useState(false);
const [isEditAvatarPopupOpen, setEditAvatarPopup] = useState(false);
const [isConfirmPopupOpen, setConfirmPopup] = useState(false);
const [selectedCard, setSelectedCard] = useState(null);

   
   function handleEditProfileClick () {
    setEditProfilePopup(true);
   }

   function handleAddPlaceClick () {
    setAddPlacePopup(true);
   }
   function handleEditAvatarClick () {
    setEditAvatarPopup(true);
   }

  //  function handleConfirmClick () {
  //   setConfirmPopup(!isConfirmPopupOpen);
  //  }

   function handleCardClick (card) {
       setSelectedCard(card);
   }


 
  function closeAllPopups() {
    setEditProfilePopup(false);
    setAddPlacePopup(false);
    setEditAvatarPopup(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          name="edit"
          title="Редактировать профиль"
          buttonText="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="text"
            name="name"
            id="profile-name"
            className="popup__edit-form popup__edit-form_type_name"
            placeholder="Введите имя"
            minLength={2}
            maxLength={30}
            required
          />
          <span className="popup__text-error" id="profile-name-error" />
          <input
            type="text"
            name="about"
            id="about"
            className="popup__edit-form popup__edit-form_type_about"
            placeholder="Введите описание"
            minLength={2}
            maxLength={200}
            required
          />
          <span className="popup__text-error" id="about-error" />
        </PopupWithForm>

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
        >
        </PopupWithForm>

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
  );
}

export default App;
