import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage";
import Map3D from "./components/Map3D";
import plants_screen, { Plants_screen } from "./components/plants_screen"; // rename to PascalCase
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

   
      <div className="px-6 py-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/3d-map" element={<Map3D />} />
          <Route path="/phenology-trends" element={<Plants_screen />} />
        
        </Routes>
      </div>
    </>
  );
}

export default App;
