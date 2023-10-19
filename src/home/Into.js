import React from "react";
import styled from "styled-components";
import Customers from "../components/Customers";

const Into = () => {
  return (
    <>
      <IntoSection>
        <Top>
          <Content>
            <h1>Into the n1uverse</h1>
            <p>
              Descubrí el n1uverse, se parte de nuestra comunidad y <br />
              accedé a todos los beneficios que tenemos para vos
            </p>
          </Content>
        </Top>
        <Customers />
      </IntoSection>
    </>
  );
};

const IntoSection = styled.div`
  height: auto;
  width: 100%;
  margin: auto;
`;

const Top = styled.div`
  background-image: url("/backgrounds/background-introhome.svg");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 400px;
  position: relative;
`;

const Content = styled.div`
  position: absolute;
  bottom: 10%;
  left: 5%;
  text-align: start;
  color: white;

  h1 {
    background-color: #ff009c;
    display: inline;
    padding: 0 10px;
    font-family: "Pixelify Sans", sans-serif;
    letter-spacing: 1px;
    font-size: 30px;
  }

  p {
    background-color: #ff009c;
    display: block;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 20px;
    letter-spacing: 0.8px;
    padding: 0 10px;
  }
`;

export default Into;
