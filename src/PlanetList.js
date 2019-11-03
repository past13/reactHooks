import React, { useContext} from 'react';
import { PlanetsContext } from './PlanetsContext';

const PlanetList = () => {
    const [planets] = useContext(PlanetsContext);
  
    return (
        <div>
            {(planets.results || []).map(item => (
                <div key={item.name}>{item.name}</div>
            ))}
        </div>
    );
}

export default PlanetList;