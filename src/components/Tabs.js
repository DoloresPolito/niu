import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";

const Tabs = () => {
  return (
    <>
      <TabsContainer>
        <h6>productos</h6>
        <h6>n1uverse</h6>
        <h6>tutoriales</h6>
        <h6>wiki</h6>
        <h6>contacto</h6>
        <h6>seguridad</h6>
      </TabsContainer>
    </>
  );
};

const TabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  h6 {
    padding: 0 20px;

    @media only screen and (max-width: 530px) {
      padding: 0 10px;
    }

    @media only screen and (max-width: 410px) {
      font-size: 10px;
      padding: 0 5px;
    }
  }
`;

export default Tabs;
