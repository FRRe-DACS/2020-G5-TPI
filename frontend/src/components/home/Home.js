import React from 'react';
import Barra from '../layout/Barra';
import ListadoPacientes from '../pacientes/Listado';
// import NuevoHC from '../pacientes/NuevoHC';

const Hospitales = () => {
    return ( 
        <div className="contenedor-app">
            <div className="seccion-principal">
                <Barra/>

                <main>
                    {/* <NuevoHC/> */}
                    
                    <div className="contenedor-tareas">
                        <ListadoPacientes/>
                    </div>
                </main>
            </div>
        </div>
     );
}

export default Hospitales;