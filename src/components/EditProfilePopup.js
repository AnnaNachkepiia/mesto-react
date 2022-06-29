import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

  function EditProfilePopup ({isOpen, onClose, onUpdateUser}) {
    // Подписка на контекст
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState("");
    const [about, setAbout] = React.useState("");



// После загрузки текущего пользователя из API
// его данные будут использованы в управляемых компонентах.
React.useEffect(() => {
  setName(currentUser.name);
  setAbout(currentUser.about);
}, [currentUser], [isOpen]); 

    function handleNameChange (e) {
setName(e.target.value);
    }

    function handleAboutChange (e) {
        setAbout(e.target.value);
    }

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
      
        // Передаём значения управляемых компонентов во внешний обработчик
        onUpdateUser({
          name,
          about: about,
        });
      }


return (
    <PopupWithForm
          name="edit"
          title="Редактировать профиль"
          buttonText="Сохранить"
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={handleSubmit}
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
            onChange={handleNameChange}
            value=""
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
            onChange={handleAboutChange}
            value=""
          />
          <span className="popup__text-error" id="about-error" />
        </PopupWithForm>)
  }

  export default EditProfilePopup;