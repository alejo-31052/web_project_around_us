 export default function ConfirmDeletion () {
 return (
    <>
    <div className="popup" id="delete-confirmation-popup">
        <div className="popup__content popup__content-deletion-confirm">
          <form className='popup__form'>
          <button
            aria-label="Cerrar ventana emergente"
            className="popup__close"
            type="submit"
          ></button>
          <h3 className="popup__title">¿Estas Seguro/a?</h3>
            <button className="button popup__button" type="submit">Si</button>
          </form>
        </div>
      </div>
    </>
 )
 }
      