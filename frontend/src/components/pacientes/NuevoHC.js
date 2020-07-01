import React from 'react';

const NuevoPaciente = () => {
    return ( 
        <div className="formulario">
            <form>
                <div className="contenedro-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nuevo Historia Clinica"
                        name="paciente"
                    />
                </div>

                <div className="contenedro-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar Historia Clinica"
                    />
                </div>
            </form>
        </div>
     );
}

export default NuevoPaciente;