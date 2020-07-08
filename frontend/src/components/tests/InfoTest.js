import React, { useContext, Fragment } from 'react';
import testContext from '../../context/tests/testContext';

const InfoTest = () => {
    const testsContext = useContext(testContext);
    const { test } = testsContext;

    const [testActual] = test;

    return ( 
        <Fragment>
            <div className="informacion-form sombra-dark">
                <form>
                    <div className="campo-form">
                        <label className="informacion-label">Nombre</label>

                        <input 
                            type="text"
                            id="apynombre"
                            name="apynombre"
                            value={testActual.nombre}
                        />
                    </div>
                    <div className="campo-form">
                        <label className="informacion-label">Fecha Creacion</label>

                        <input 
                            type="text"
                            id="domicilio"
                            name="domicilio"
                            value={testActual.fechacreacion}
                        />
                    </div>
                    <div className="campo-form">
                        <label className="informacion-label">Fecha Primeros sintomas</label>

                        <input 
                            type="text"
                            id="domicilio"
                            name="domicilio"
                            value={testActual.fecha1ersintoma}
                        />
                    </div>
                    <div className="campo-form">
                        <label className="informacion-label">Sintomas</label>

                        <input 
                            type="text"
                            id="domicilio"
                            name="domicilio"
                            value={testActual.sintomas}
                        />
                    </div>
                    <div className="campo-form">
                        <label className="informacion-label">Diarrea</label>

                        <input 
                            type="text"
                            id="domicilio"
                            name="domicilio"
                            value={testActual.diarrea}
                        />
                    </div>
                    <div className="campo-form">
                        <label className="informacion-label">Vomito</label>

                        <input 
                            type="text"
                            id="domicilio"
                            name="domicilio"
                            value={testActual.vomito}
                        />
                    </div>
                    <div className="campo-form">
                        <label className="informacion-label">Dolor de garganta</label>

                        <input 
                            type="text"
                            id="domicilio"
                            name="domicilio"
                            value={testActual.dolorgarganta}
                        />
                    </div>
                    <div className="campo-form">
                        <label className="informacion-label">Rechazo alimenticio</label>

                        <input 
                            type="text"
                            id="domicilio"
                            name="domicilio"
                            value={testActual.rechazoalimento}
                        />
                    </div>
                    <div className="campo-form">
                        <label className="informacion-label">Perdida de Olfato</label>

                        <input 
                            type="text"
                            id="domicilio"
                            name="domicilio"
                            value={testActual.perdidadelolfato}
                        />
                    </div>
                    <div className="campo-form">
                        <label className="informacion-label">Obesidad</label>

                        <input 
                            type="text"
                            id="domicilio"
                            name="domicilio"
                            value={testActual.obesidad}
                        />
                    </div>

                </form>
            </div>
        </Fragment>
     );
}

export default InfoTest;