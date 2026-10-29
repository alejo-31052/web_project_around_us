export default function EditProfile (): React.JSX.Element {

    return (
        <>
         <div className="popup" id="edit-popup">
        <div className="popup__content">
          <button
            aria-label="Cerrar ventana emergente"
            className="popup__close"
            type="button"
          ></button>
          <h3 className="popup__title">Editar perfil</h3>
          <form className="popup__form" id="edit-profile-form">
            <input
              className="popup__input popup__input_type_name"
              name="name"
              placeholder="Nombre"
              type="text"
              minLength={2}
              maxLength={40}
              required
            />
            <span className="popup__error popup__error_type_name"></span>
            <input
              className="popup__input popup__input_type_description"
              name="description"
              placeholder="Acerca de mí"
              type="text"
              required
              minLength={2}
              maxLength={200}
            />
            <span className="popup__error popup__error_type_description"></span>
            <button className="button popup__button" type="submit">Guardar</button>
          </form>
        </div>
        </div>
    </>
    )
}