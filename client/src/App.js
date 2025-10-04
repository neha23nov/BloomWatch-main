import React from "react";
import { Routes, Route } from 'react-router-dom';
import HomePage from "./components/Homepage";
//import Map3D from "./components/3dMap"; // make sure file name matches exactly

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
   
    </Routes>
  );
}

export default App;
