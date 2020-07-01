import React from 'react';
import Barra from './Barra';
import Sidebar from './Sidebar';
import ListadoPacientes from '../pacientes/Listado';

const Hospitales = () => {
    return ( 
        <div className="contenedor-app">
            <Sidebar/>

            <div className="seccion-principal">
                <Barra/>

                <main>
                    <div className="contenedor-tareas">
                        <ListadoPacientes/>
                    </div>
                </main>
            </div>
        </div>
     );
}

export default Hospitales;