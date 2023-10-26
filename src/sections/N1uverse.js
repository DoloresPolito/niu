import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import Navbar from "../structure/Navbar";
import Footer from "../structure/Footer";
import Players from "../n1uverse/Players";
import Store from "../n1uverse/Store";
import N1uverseCover from "../n1uverse/N1uverseCover";
import Comunity from "../n1uverse/Comunity";
import Cover from "../n1uverse/Cover";
import CustomersN1uverse from "../n1uverse/CustomersN1uverse.js";

const N1uverse = () => {
  const [ref, inView] = useInView({
    threshold: 0.95, 
  });

  const [sectionInView, setSectionInView] = useState(false);

  useEffect(() => {
    if (inView) {
      setSectionInView(true);
      disableScroll();
      setTimeout(() => {
        setSectionInView(false);
        enableScroll();
      }, 300);
    } else {
      setSectionInView(false);
    }
  }, [inView]);

  function disableScroll() {
    document.body.style.overflow = "hidden";
  }

  function enableScroll() {
    document.body.style.overflow = "auto";
  }
  return (
    <>
      <N1uverseSection>
        <Navbar />
        <Cover />
        <N1uverseCover />
        <Comunity />

        <Players />

        <div
          ref={ref}
          style={{
            height: "100vh",
          }}
        >
          <Store />
        </div>
        <CustomersN1uverse />
        <Footer />
      </N1uverseSection>
    </>
  );
};

const N1uverseSection = styled.div`
  min-height: 100vh;
  height: auto;
  width: 100%;
  margin: auto;
  background-color: black;
`;



export default N1uverse;
