import React, { useContext} from 'react';
import { PlanetsContext } from './PlanetsContext';

const PlanetList = () => {
    const [planets] = useContext(PlanetsContext);
    const planetList = Array.from(planets);
    return (
        <div>
            {planetList.map((item) => {
                return <div key={item._id}>{item.name}</div>
            })}
        </div>
    );
}

export default PlanetList;