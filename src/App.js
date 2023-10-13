import "./App.css";
import { Routes, Route } from "react-router-dom";
import Questions from "./sections/Questions";
import Esentials from "./sections/Esentials";
import Home from "./sections/Home"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/faqs" element={<Questions/>} />
        <Route path="/features" element={<Esentials/>} />
 
      </Routes>
    </>
  );
}

export default App;
