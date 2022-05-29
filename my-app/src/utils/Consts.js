export const initialCards = [{
        name: "Архыз",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
        name: "Челябинская область",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
        name: "Иваново",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
        name: "Камчатка",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
        name: "Холмогорский район",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
        name: "Байкал",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    },
];

export const popupEditElement = document.querySelector(".popup_type_edit");
export const popupAddElement = document.querySelector(".popup_type_add-card");
export const popupImgElement = document.querySelector(".popup_type_open-image");
export const popupConfirmElement = document.querySelector(
    ".popup_type_confirm"
);
export const popupUpdateAvatarElement = document.querySelector(
    ".popup_type_update-avatar"
);
export const popupOpenAddButttonElement = document.querySelector(
    ".profile__add-button"
);
export const popupUpdateButtonElement = document.querySelector(
    ".profile__avatar-edit"
);
export const popupEditCloseButtonElement =
    document.querySelector(".popup__close_edit");
export const popupAddCloseButtonElement =
    document.querySelector(".popup__close_add");
export const popupImgCloseButtonElement =
    document.querySelector(".popup__close_img");
export const popupOpenButtonElement = document.querySelector(
    ".profile__edit-button"
);
export const popupSubmitButtonElement = popupEditElement.querySelector(
    ".popup__submit_type_save"
);
export const popupSubmitButtonAdd = popupAddElement.querySelector(
    ".popup__submit_type_create"
);

export const popupFormElement = popupEditElement.querySelector(
    ".popup__form-container_type_edit"
);
export const popupAddFormElement = popupAddElement.querySelector(
    ".popup__form-container_type_add"
);
export const popupEditAvatarFormElement =
    popupUpdateAvatarElement.querySelector(
        ".popup__form-container_type_update-avatar"
    );
export const nameInput = popupFormElement.querySelector(
    ".popup__edit-form_type_name"
);
export const jobInput = popupFormElement.querySelector(
    ".popup__edit-form_type_about"
);
export const cardNameInput = popupAddElement.querySelector(
    ".popup__edit-form_type_card-name"
);
export const cardLinkInput = popupAddElement.querySelector(
    ".popup__edit-form_type_link"
);
export const profileTitle = document.querySelector(".profile__title");
export const profileSubtitle = document.querySelector(".profile__subtitle");
export const profileAvatar = document.querySelector(".profile__avatar");
export const popupPicture = document.querySelector(".popup__picture");
export const popupOpenPicture = document.querySelector(".popup__fulled-img");
export const popupOpenPictureCapture = popupPicture.querySelector(
    ".popup__picture-title"
);

export const listCards = document.querySelector(".places");

export const formObj = {
    formSelector: ".popup__form-container",
    inputSelector: ".popup__edit-form",
    submitButtonSelector: ".popup__submit",
    submitButtonDisabledClass: "popup__submit-disabled",
    errorClass: "popup__edit-form_type_error",
    errorClassActive: "popup__text-error_active",
};