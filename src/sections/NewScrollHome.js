import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Cards from "../home/Cards";
import Into from "../home/Into";
import Download from "../home/Download";
import Cube from "../home/Cube";
import Cover from "../home/Cover";
import Footer from "../structure/Footer";
import Navbar from "../structure/Navbar";
import PixelMobile from "../home/PixelMobile";
import Sponsors from "../home/Sponsors";
import "../index.css";

const NewScrollHome = () => {
  const divRef = useRef(null);
  const [width, setWidth] = useState(getWidth());
  const [totalWidth, setTotalWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setTotalWidth(window.innerWidth);
      setWidth(getWidth());
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function getWidth() {
    return divRef?.current?.offsetWidth;
  }

  return (
    <>
      {" "}
      <ScrollContainer className="scroll-container">
        <Slide>
          <Navbar />
          <Cover />
        </Slide>
        {totalWidth < 800 ? (
          <Slide>
            <PixelMobile />
          </Slide>
        ) : (
          <></>
        )}
        <Slide>
          <Cube />
        </Slide>
        <Slide>
          <Into />
        </Slide>
        <Slide>
          <Cards />
        </Slide>
        {totalWidth < 1020 ? (
          <Slide>
            <Sponsors />
          </Slide>
        ) : (
          <></>
        )}
        <Slide>
          <Download />
        </Slide>
        <Slide>
          <Footer view="home" />
        </Slide>
      </ScrollContainer>
    </>
  );
};

const ScrollContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`;

const Slide = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  color: white;
  scroll-snap-align: start;
  /* position: sticky; */
  top: 0;
  z-index: 1;
`;

export default NewScrollHome;
