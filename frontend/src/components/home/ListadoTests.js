import React, { useContext } from 'react';
import Test from './Test';
import testContext from '../../context/tests/testContext';

const ListadoTests = () => {
    const testsContext = useContext(testContext);

    const { tests } = testsContext;

    return ( 
        <ul className="listado-proyectos">
            {tests.map(test => (
                <Test
                    test={test}
                />
            ))}
        </ul>
     );
}

export default ListadoTests;