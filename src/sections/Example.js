import React, { useState, useEffect, useRef } from "react";
import ScrollMagic from "scrollmagic";
import styled from "styled-components";
import Cards from "../home/Cards";
import Into from "../home/Into";
import Download from "../home/Download";
import Cube from "../home/Cube";
import Cover from "../home/Cover";
import Footer from "../structure/Footer";
import Navbar from "../structure/Navbar";
import "../App.css";

const Example = () => {
  const [zoomLevel, setZoomLevel] = useState(1); // Inicializa el nivel de zoom a 1 (100%)
  const controller = useRef(null);

  useEffect(() => {
    if (!controller.current) {
      controller.current = new ScrollMagic.Controller({
        globalSceneOptions: {
          triggerHook: "onLeave",
        },
      });
    }

    const handleResize = () => {
      // Actualiza el nivel de zoom y el controlador
      const newZoomLevel = window.innerWidth / window.screen.width;
      setZoomLevel(newZoomLevel);
      controller.current.update();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Configura escenas ScrollMagic
    const slides = document.querySelectorAll(".panel");

    slides.forEach((slide, index) => {
      new ScrollMagic.Scene({
        triggerElement: slide,
      })
        .setPin(slide, { pushFollowers: true })
        .addTo(controller.current);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div id="content">
        <SectionVideo zoom={zoomLevel}>
          <div className="panel-inner">
            <Cover />
          </div>
        </SectionVideo>

        <div id="section-wipes">
          <section className="panel">
            <div className="panel-inner">
              <Cube />
            </div>
          </section>

          <section className="panel">
            <div className="panel-inner">
              <Into />
            </div>
          </section>

          <section className="panel">
            <div className="panel-inner">
              <Cards />
            </div>
          </section>
          <section className="panel">
            <div className="panel-inner">
              <Into />
            </div>
          </section>

          <footer className="panel">
            <Download />
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
};

const SectionVideo = styled.section`
  position: relative;
  height: 100%;
  min-height: 100%;
  min-width: 100%;
  height: ${(props) => (props.zoom > 1 ? "100vh" : "180vh")};
`;

export default Example;
