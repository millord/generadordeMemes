import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Header from "./Header";
import MemeGenerator from "./MemeGenerator";

function App() {
  return (
    <div>
      <Header />
      <MemeGenerator />
    </div>
  );
}

export default App;
