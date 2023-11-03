import React from "react";
import styled from "styled-components";
import Navbar from "../structure/Navbar";
import Footer from "../structure/Footer";
import Players from "../n1uverse/Players";
import Store from "../n1uverse/Store";
import N1uverseCover from "../n1uverse/N1uverseCover";
import Comunity from "../n1uverse/Comunity";
import CustomersN1uverse from "../n1uverse/CustomersN1uverse.js";


const N1uverse = () => {

  return (
    <>
 
        <N1uverseSection>
          <Navbar />
          <N1uverseCover />

          <Comunity />
          <Players />
          <Store />

          <CustomersN1uverse />
          <Footer />
        </N1uverseSection>
  
    </>
  );
};

const N1uverseSection = styled.div`
  height: auto;
  width: 100%;
  background-color: black;
  margin-bottom: 0px;
  padding-bottom: 0px;
`;

export default N1uverse;
