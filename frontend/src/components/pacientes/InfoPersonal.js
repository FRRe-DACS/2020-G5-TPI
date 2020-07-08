import React, { useContext, Fragment } from 'react';
import pacienteContext from '../../context/pacientes/pacienteContext';

const InfoPersonal = () => {
    const pacientesContext = useContext(pacienteContext);
    const { paciente } = pacientesContext;
    const [pacienteActual] = paciente;

    return ( 
        <Fragment>
            <div className="tarea sombra">
                <p>Informacion Personal</p>
            </div>
            
            <div className="informacion-form sombra-dark">
                <form>
                    <div className="campo-form">
                        <label className="informacion-label">Nombre</label>

                        <input 
                            type="text"
                            id="apynombre"
                            name="apynombre"
                            value={pacienteActual.nombre}
                        />
                    </div>
                    <div className="campo-form">
                        <label className="informacion-label">Apellido</label>

                        <input 
                            type="text"
                            id="apellido"
                            name="apellido"
                            value={pacienteActual.apellido}
                        />
                    </div>
                    <div className="campo-form">
                        <label className="informacion-label">Localidad</label>

                        <input 
                            type="text"
                            id="localidad"
                            name="localidad"
                            value={pacienteActual.localidad}
                        />
                    </div>
                    <div className="campo-form">
                        <label className="informacion-label">Telefono</label>

                        <input 
                            type="text"
                            id="telefono"
                            name="telefono"
                            value={pacienteActual.telefono}
                        />
                    </div>
                    <div className="campo-form">
                        <label className="informacion-label">E-mail</label>

                        <input 
                            type="text"
                            id="email"
                            name="email"
                            value={pacienteActual.email}
                        />
                    </div>
                    <div className="campo-form">
                        <label className="informacion-label">DNI</label>

                        <input 
                            type="text"
                            id="dni"
                            name="dni"
                            value={pacienteActual.dni}
                        />
                    </div>
                </form>
            </div>
        </Fragment>
     );
}

export default InfoPersonal;