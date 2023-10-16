import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Tabs = ({view}) => {
  return (
    <>
      <TabsContainer view={view}>
        <Link to="/" className="link">
          <h6>productos</h6>
        </Link>

        <Link to="/n1uverse" className="link">
          {" "}
          <h6>n1uverse</h6>
        </Link>

        <Link to="/features" className="link">
          <h6>tutoriales</h6>
        </Link>
        <Link to="/faqs" className="link">
          <h6>wiki</h6>
        </Link>

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
  color: ${(props) => props.view === "benefit" ? "black" : "white"};



  .link{
    text-decoration: none;
    color: ${(props) => props.view === "benefit" ? "black" : "white"};
  }

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
