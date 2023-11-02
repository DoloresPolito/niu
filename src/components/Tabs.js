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

        <Link to="https://n1u.app/referidos-n1u/" className="link" target="_blank">
          <DifLink>referí y ganá</DifLink>
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

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
  }

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

    &:hover {
      color: #ff009c;
      font-weight: 500;

      @media only screen and (max-width: 900px) {
        color: black;
      }
    }

    @media only screen and (max-width: 900px) {
      color: #fff;
      font-size: 30px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      padding: 0;
      margin: 20px 0px;
    }
  }
`;

const DifLink = styled.h6`
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 0 30px;
  color: #ff009c !important;

  @media only screen and (max-width: 900px) {
    color: black !important;
  }

  &:hover {
    font-weight: 500;

    @media only screen and (max-width: 900px) {
      color: black !important;
    }
  }
`;

export default Tabs;
