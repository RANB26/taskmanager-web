
export default function Modal({ children, estadoModal, setEstadoModal, titulo="Alerta" }) {

    return (
        <>
            {estadoModal &&
                <div className="overlay">
                    <div className="contenedor-modal">
                        <div className="encabezado-modal">
                            <h3>{titulo}</h3>
                        </div>
                        <div className="btn-cerrar" onClick={() => setEstadoModal(false)}>
                            <i className="bi bi-x-lg"></i>
                        </div>
                        {children}
                    </div>
                </div>
            }
        </>
    )
}