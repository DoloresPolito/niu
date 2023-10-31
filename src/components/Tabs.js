import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Tabs = ({ view }) => {
  return (
    <>
      <TabsContainer view={view}>
        <Link to="/features" className="link">
          <h6>features</h6>
        </Link>

        <Link to="/n1uverse" className="link">
          {" "}
          <h6>n1uverse</h6>
        </Link>
     
          <h6>wiki</h6>


        <h6>contacto</h6>
        <Link to="/faqs" className="link">
        <h6>faq</h6>
        </Link>
      </TabsContainer>
    </>
  );
};

const TabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: ${(props) => (props.view === "benefit" ? "black" : "white")};

  .link {
    text-decoration: none;
    color: ${(props) => (props.view === "benefit" ? "black" : "white")};
  }

  h6 {
    color: ${(props) => (props.view === "benefit" ? "black" : "white")};
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 0 30px;

    &:hover{
      color:#FF009C;
      font-weight: 500;
    }

    @media only screen and (max-width: 530px) {
      padding: 0 10px;
    }

    @media only screen and (max-width: 530px) {
      padding: 0 10px;
    }

    @media only screen and (max-width: 460px) {
      font-size: 13px;
      padding: 0 5px;
    }

    @media only screen and (max-width: 390px) {
      font-size: 12px;
      padding: 0 5px;
    }
  }
`;

export default Tabs;
