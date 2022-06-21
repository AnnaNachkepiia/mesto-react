import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [cardName, setCardName] = React.useState("");
  const [cardLink, setCardLink] = React.useState("");

  React.useEffect(() => {
    setCardName('');
    setCardLink('');
  }, [isOpen]);

  function handleNameInput(e) {
    setCardName(e.target.value);
  }

  function handleLinkInput(e) {
    setCardLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({name: cardName, link: cardLink
    });
  }
  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      buttonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
        onChange={handleNameInput}
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
        onChange={handleLinkInput}
      />
      <span className="popup__text-error" id="link-error" />
    </PopupWithForm>
  );
}

export default AddPlacePopup;
