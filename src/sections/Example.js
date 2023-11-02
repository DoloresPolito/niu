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
  const [totalWidth, setTotalWidth] = useState(window.innerWidth);
  const controller = useRef(null);

  useEffect(() => {
    // Crear una única instancia del controlador
    if (!controller.current) {
      controller.current = new ScrollMagic.Controller({
        globalSceneOptions: {
          triggerHook: "onLeave",
        },
      });
    }

    // Actualizar el controlador cuando cambie el tamaño de la pantalla
    const handleResize = () => {
      setTotalWidth(window.innerWidth);

      // Actualizar el controlador
      controller.current.update();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Resto del código de tus escenas ScrollMagic
    const slides = document.querySelectorAll(".panel");

    slides.forEach((slide) => {
      new ScrollMagic.Scene({
        triggerElement: slide,
      })
        .setPin(slide, { pushFollowers: false })
        .addTo(controller.current); // Usa la instancia del controlador
    });
  }, []);

  return (
    <>
      <Navbar />
      <div id="content">
        <SectionVideo width={totalWidth}>
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
  height: ${(props) => (props.width > 1020 ? "100vh" : "180vh")};
`;

export default Example;
