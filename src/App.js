import "./App.css";
import { Routes, Route } from "react-router-dom";
import Questions from "./sections/Questions";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Questions/>} />
 
      </Routes>
    </>
  );
}

export default App;
