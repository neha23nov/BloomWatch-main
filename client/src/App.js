import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage";
import Map3D from "./components/Map3D";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/3d-map" element={<Map3D />} />  {/* <-- notice: /3dmap */}
    </Routes>
  );
}

export default App;
