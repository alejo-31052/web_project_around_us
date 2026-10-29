export default function EditAvatar () {
    return (
        <div className="popup" id="change-profile-picture-popup">
        <div className="popup__content">
          <button
            aria-label="Cerrar ventana emergente"
            className="popup__close"
            type="button"
          ></button>
          <h3 className="popup__title">Cambiar foto de perfil</h3>
          <form className="popup__form" id="change-profile-picture-form">
            <input
              className="popup__input popup__input_type_name"
              name="name"
              placeholder="Enlace de la imagen"
              type="text"
              minLength={2}
              required
            />
            <span className="popup__error popup__error_type_name"></span>
            <button className="button popup__button" type="submit">Guardar</button>
          </form>
        </div>
      </div>
    )
}