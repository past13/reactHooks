import React from 'react';
import './App.css';

import MovieList from './MovieList';
import { MovieProvider } from './MovieContext';
import AddMovie from './AddMovie';

import LocationList from './LocationList';
import { LocationsProvider } from './LocationContext';
import AddLocation from './AddLocation';

import MaterialList from './MaterialList';
import { MaterialsProvider } from './MaterialContext';
import AddMaterial from './AddMaterial';

function App() {
  return (
    <div>
    <MovieProvider>
      <div className="App">
        <AddMovie />
        <MovieList />       
      </div>
    </MovieProvider>
    <MaterialsProvider>
      <AddMaterial />
      <MaterialList />
    </MaterialsProvider>
    <LocationsProvider>
      <AddLocation />
      <LocationList />
    </LocationsProvider>
    </div>
  );
}

export default App;
