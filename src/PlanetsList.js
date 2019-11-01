import React, { useContext} from 'react';
import { PlanetsContext } from './PlanetsContext';

const PlanetsList = () => {
    const [planets] = useContext(PlanetsContext);
    
    return (
        <div>
            
            {planets.map(planet => (
                console.log(planet)
            ))}
        </div>
    );
}

export default PlanetsList;