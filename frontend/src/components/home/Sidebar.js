import React from 'react';
import ListadoPaciente from './Listado'

const Sidebar = () => {
    return ( 
        <aside>
            <div className="proyectos">
                <h2>Test Pendientes</h2>
                
                <h2>Pacientes</h2>

                <ListadoPaciente/>
            </div>
        </aside>
     );
}

export default Sidebar;