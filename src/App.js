import React from 'react';
import './App.css';
import { MovieProvider } from './MovieContext';

import MovieList from './MovieList';
import AddMovie from './AddMovie';

import PlanetList from './PlanetList';

import { PlanetsProvider } from './PlanetsContext';

function App() {
  return (
    <div>
    <MovieProvider>
      <div className="App">
        <AddMovie />
        <MovieList />       
      </div>
    </MovieProvider>
    <PlanetsProvider>
      <PlanetList />
    </PlanetsProvider>
    </div>
  );
}

export default App;
