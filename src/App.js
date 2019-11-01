import React from 'react';
import './App.css';
import { MovieProvider } from './MovieContext';

import MovieList from './MovieList';
import AddMovie from './AddMovie';

import { Planets } from './PlanetsContext';

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
      
    </PlanetsProvider>
    </div>
  );
}

export default App;
