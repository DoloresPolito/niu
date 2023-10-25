import React from "react";
import styled from "styled-components";
import Customers from "../components/Customers";

const Into = () => {
  return (
    <>
      <IntoSection>
        <Top>
          <Content>

            <Title>
            <h1>Into the n1uverse</h1>
            </Title>


            <Text>
              <p className="first">
                Descubrí el n1uverse, se parte de nuestra comunidad y
              </p>
              <p className="second">
                accedé a todos los beneficios que tenemos para vos.
              </p>
            </Text>
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

  .first {
    width: 440px;
  }

  .second {
    width: 418px;
  }

  h1 {
    background-color: #ff009c;
    display: inline;
    padding: 0 10px;
    font-family: "Pixelify Sans", sans-serif;
    letter-spacing: 1px;
    font-size: 30px;
    margin-top: -50px;
  }

  p {
    background-color: #ff009c;
    font-family: "Roboto", sans-serif;
    padding-left: 10px;
    color: #e8e9ee;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: 102%;
    margin: 0;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

`;

const Title = styled.div`
margin-bottom: 30px;
`

export default Into;
