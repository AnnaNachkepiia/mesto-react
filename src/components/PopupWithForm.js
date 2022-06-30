import React from "react";

function PopupWithForm({name, title, buttonText, isOpen, children, onClose, onSubmit}) {
return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_is-opened' : ''}`}>
          <div className="popup__container">
            <button onClick={onClose}
            type="button" className={`popup__close popup__close_${name}`} />
            <h2 className="popup__title"> {title} </h2>
            <form
              className={`popup__form-container popup__form-container_type_${name}`}
              noValidate
              onSubmit={onSubmit}
            >
             {children}
              <button
                type="submit"
                className="popup__submit popup__submit_type_save"
              >
                {buttonText}
              </button>
            </form>
          </div>
        </div>
)
}

export default PopupWithForm