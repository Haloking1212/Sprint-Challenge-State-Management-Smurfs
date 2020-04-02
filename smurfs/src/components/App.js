import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import Smurfs from "./Smurfs";
import { SmurfContext } from "../context/SmurfContext";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    axios.get("http://localhost:3333/smurfs").then(response => {
      console.log(data);
      setData(response.data);
    });

  }, [update]);

  console.log(data,"data testing")


  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <h1>hello world</h1>

      <SmurfContext.Provider value={{ data, update, setUpdate }}>
        <Route exact path="/" component={Smurfs} />
      </SmurfContext.Provider>
    </div>
  );
}

export default App;
