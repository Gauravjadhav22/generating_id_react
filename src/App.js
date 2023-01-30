import React from "react";
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Icards from "./pages/Icards";
import Result from "./pages/Result";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/result" element={<Result />} />
      <Route path="/icards" element={<Icards />} />
    </Routes>
  );
}

export default App;
