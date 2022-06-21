import React from "react";
import PopupWithForm from "./PopupWithForm";


function EditAvatarPopup ({isOpen, onClose, onUpdateAvatar}) {

    const avatarRef = React.useRef()

    React.useEffect (() => {
        avatarRef.current.value = "";
    }, [isOpen])

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
          avatar: avatarRef.current.value,
        });
      }
     

    return (
        <PopupWithForm
        name="update-avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
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
          ref={avatarRef}
        />
        <span className="popup__text-error" id="avatar-link-error" />
      </PopupWithForm>
    )
}

export default EditAvatarPopup;