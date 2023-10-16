import "./App.css";
import { Routes, Route } from "react-router-dom";
import Faqs from "./sections/Faqs";
import Features from "./sections/Features";
import Home from "./sections/Home"
import N1uverse from "./sections/N1uverse";
import Benefits from "./sections/Benefits";
import Benefit from "./sections/Benefit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/n1uverse" element={<N1uverse/>} />
        <Route path="/faqs" element={<Faqs/>} />
        <Route path="/benefits" element={<Benefits/>} />
        <Route path="/benefit/:id" element={<Benefit />} />
        <Route path="/features" element={<Features/>} />
 
      </Routes>
    </>
  );
}

export default App;
