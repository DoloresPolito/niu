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
    console.log("USEEFFECT DE ACHICAR PANTALLA");
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

  //zoom pantalla
  useEffect(() => {
    console.log("USEEFFECT DE ZOOM");
  
    const handleZoomChange = () => {
      // Actualiza el controlador si cambia el nivel de zoom
      controller.current.update();
    };
  
    // Agrega el event listener para el evento 'resize'
    window.addEventListener("resize", handleZoomChange);
  
    // Devuelve una función de limpieza para eliminar el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleZoomChange);
    };
  }, []);

  useEffect(() => {
    console.log("USEEFFECT DE SLIDES");
    // Resto del código de tus escenas ScrollMagic
    const slides = document.querySelectorAll(".panel");

    console.log("slides", slides);

    slides.forEach((slide, index) => {
      console.log("slice", slide);
      console.log("slice", index);
      new ScrollMagic.Scene({
        triggerElement: slide,
        // duration: 100,
      })
        .setPin(slide, { pushFollowers: true })
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
  height: ${(props) => (props.width > 1020 ? "100vh" : "180vh")};
`;

export default Example;