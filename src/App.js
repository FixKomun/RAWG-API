import React from "react";
import GlobalStyles from "./components/GlobalStyles";
//Components/Pages
import Home from "./pages/home";
import Nav from "./components/Nav";
//Router
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/game/:id" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
