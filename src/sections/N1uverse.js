import React from "react";
import styled from "styled-components";
import Navbar from "../structure/Navbar";
import Footer from "../structure/Footer";
import Players from "../n1uverse/Players";
import Store from "../n1uverse/Store";
import N1uverseCover from "../n1uverse/N1uverseCover";

const N1uverse = () => {
  return (
    <>
      <N1uverseSection>
        <Navbar />
       < N1uverseCover/>
        <Players />
        <Store/>
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
