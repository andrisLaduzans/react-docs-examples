import React, { useState } from "react";
import "./App.css";
import Welcome from "./01-componentsAndProps/Welcome";
import ListsAndKeys from "./08-lists-and-keys/ListsAndKeys";
import Clock from "./5-State-and-Lifecycle/StateAndLifecycle";
import Calculator from "./10-Lifting-State-Up/Calculator";

const animal = {
  type: "sheep",
  desciption: "puukaina un bleeej",
  image: {
    src: "te ir links uz image",
  },
};

function App() {
  const [show, setShow] = useState(true);

  const handleToggle = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className="App" id="app">
      {/* children */}
      {/* <Welcome
        name="Andrs"
        lastName="LAla"
        age="35"
        onClick={() => null}
        animal={animal}
      /> */}
      <ListsAndKeys />
      {/* conditional rendering example */}
      {show ? <Clock /> : <h3>Component hidden</h3>}
      {show && <Clock />}
      <button onClick={() => handleToggle()}>hide component</button>

      <div style={{ marginTop: "5rem", marginBottom: "5rem" }}>
        <Calculator />
        
      </div>
    </div>
  );
}

export default App;
