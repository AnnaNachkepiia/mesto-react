import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import api from "../utils/API";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

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

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
    .changeLikeCardStatus(card._id, isLiked)
    .then((newCard) => {
        setCard((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch(err => console.log(err));

}

function handleCardDelete(card) {
  api
  .deleteCard(card._id)
  .then(() => {
    setCard(cards => cards.filter((c) => c._id !== card._id));
  })
  .catch(err => console.log(err));

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

  function handleUpdateAvatar(avatar) {
    api
    .editUserAvatar(avatar)
    .then((data) => {
      setCurrentUser(data);
      closeAllPopups()
    })
    .catch((err) => console.log(err));
  }

  function handleAddPlaceSubmit(item) {
    api
    .addNewCard(item)
    .then((newCard) => {
      setCard([newCard, ...card]);
      closeAllPopups()
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
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}

          />
          <Footer />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

          <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          
          />
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
          <AddPlacePopup 
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          />
          <PopupWithForm
            name="confirm"
            title="Вы уверены?"
            buttonText="Да"
            isOpen={isConfirmPopupOpen}
            onClose={closeAllPopups}
          ></PopupWithForm>

         
          <template id="cardTemplate" className="template-place" />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
