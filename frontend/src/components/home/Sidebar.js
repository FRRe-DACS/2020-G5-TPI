import React from 'react';
import ListadoPaciente from './ListadoPacientes'
import ListadoTests from './ListadoTests'

const Sidebar = () => {
    return ( 
        <aside>
            <div className="proyectos">

                <h2>Test Pendientes</h2>

                <ListadoTests/>
                
                <h2>Pacientes</h2>

                <ListadoPaciente/>
            </div>
        </aside>
     );
}

export default Sidebar;