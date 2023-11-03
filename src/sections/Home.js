import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Navbar from "../structure/Navbar";
import Footer from "../structure/Footer";
import Download from "../home/Download";
import Cards from "../home/Cards";
import Into from "../home/Into";
import Cube from "../home/Cube";
import CoverMobile from "../home/CoverMobile";
import "../App.css";
import Cover from "../home/Cover";

const Home = () => {
  const [width, setWidth] = useState(null);
  const getWidth = () => divRef?.current?.offsetWidth;
  const medium = 900;
  const divRef = useRef(null);

  const [totalWidth, setTotalWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setTotalWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(getWidth());
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <HomeSection>
        <Navbar />

        <div className="container">
          {totalWidth < medium ? (
            <>
              <CoverMobile />
            </>
          ) : (
            <>
              <section>
                <Cover />
              </section>
            </>
          )}
          <section>
            <Into />
          </section>

          <section>
            <Cards />
          </section>

          <section>
            <Cube />
          </section>

          <section>
            <Download />
          </section>
        </div>
      </HomeSection>
    </>
  );
};

const Section = styled.div`
  background-color: #141414;
  height: auto;
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HomeSection = styled.div`
  min-height: 100vh;
  height: auto;
  width: 100%;
  margin: auto;
  background-color: white;
`;

export default Home;
