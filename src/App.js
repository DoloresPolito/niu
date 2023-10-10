import "./App.css";
import { Routes, Route } from "react-router-dom";
import Questions from "./sections/Questions";
import Esentials from "./sections/Esentials";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Questions/>} />
        <Route path="/esentials" element={<Esentials/>} />
 
      </Routes>
    </>
  );
}

export default App;
