import React, { useState, useEffect, createContext } from "react";

export const PlanetsContext = createContext();

export const PlanetsProvider = (props)  => {
  const  [hasError, setErrors] =  useState(false);
  const  [planets, setPlanets ]= useState({});


 async function fetchData() {
      const res = await fetch("http://localhost:5000/locations/");
      res
        .json()
        .then(res => setPlanets(res))
        .catch(err => setErrors(err));
    }

  useEffect(() => {
    fetchData();
  });

  return (
    <PlanetsContext.Provider value={[planets, setPlanets]}>
        {props.children}
    </PlanetsContext.Provider>
  )
}
