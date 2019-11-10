import React, { useState } from "react";
import { Route } from "react-router-dom";
import { useAxios } from "../hooks/useAxios";
import { SmurfProvider } from "../context/SmurfContext";
import Smurfs from "./Smurfs";

import "./App.css";

function App() {
  const [state, setUrl] = useAxios("http://localhost:3333/smurfs");

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>

      <SmurfProvider value={{ state, setUrl }}>
        <Route exact path="/" component={Smurfs} />
      </SmurfProvider>
    </div>
  );
}

export default App;
