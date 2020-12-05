import React from "react";
import HomePage from "./components/homePage/HomePage";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Route path="/" component={HomePage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
