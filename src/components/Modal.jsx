import CerrarImg from '../img/cerrar.svg'


const Modal = ({setModal}) => {

    const ocultarModal = () => {
        setModal(false);
    }




  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img
                src={CerrarImg}
                alt='Cerrar Modal'
                onClick={ocultarModal}
            />
        </div>
      
    </div>
  )
}

export default Modal
