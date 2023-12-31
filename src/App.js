import "./App.css";
import { Routes, Route } from "react-router-dom";
import Faqs from "./sections/Faqs";
import Features from "./sections/Features";
import Home from "./sections/Home";
import N1uverse from "./sections/N1uverse";
import Benefits from "./sections/Benefits";
import Benefit from "./sections/Benefit";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

// import { SmoothProvider } from "react-smooth-scrolling";



function App() {
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === "/benefits" ||
      location.pathname === "/features" ||
      location.pathname.startsWith("/benefit/")
    ) {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
  }, [location]);

  return (
    <>
     
      {/* <SmoothProvider skew={false} > */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/n1uverse" element={<N1uverse />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/benefit/:id" element={<Benefit />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      {/* </SmoothProvider> */}

    </>
  );
}

export default App;
