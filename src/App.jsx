import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./component/NavBar";
import CartContainer from "./component/CartContainer";

function App() {
  return (
    <div className="App">
      <h1> Redux Exercise</h1>
      <NavBar />
      <CartContainer />
    </div>
  );
}

export default App;
