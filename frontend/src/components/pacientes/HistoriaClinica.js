import React, { Fragment } from 'react';

const HistoriaClinica = () => {
    return ( 
        <Fragment>
            <div className="tarea sombra">
                <p>Historia Clinica</p>

                {/* <button
                    type="button"
                    className="btn btn-eliminar"
                >Ver</button> */}
            </div>

            <div className="informacion-form sombra-dark">
            <form>
                <div className="campo-form">
                    <label className="informacion-label">Fecha ultimo asiento</label>

                    <input 
                        type="text"
                        id="apynombre"
                        name="apynombre"
                        value="03/07/2020"
                    />
                </div>
                <div className="campo-form">
                    <label className="informacion-label">Enfermedades</label>

                    <input 
                        type="text"
                        id="domicilio"
                        name="domicilio"
                        value="enfermedades"
                    />
                </div>
            </form>
            </div>
        </Fragment>
     );
}

export default HistoriaClinica;