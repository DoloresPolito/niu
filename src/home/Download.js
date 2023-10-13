import React from "react";
import styled from "styled-components";
import ios from "../assets/home/IOS buttom.png";
import googleplay from "../assets/home/Google play buttom.png";
import mockup from "../assets/home/Mockup.png";

const Download = () => {
  return (
    <>
      <DownloadSection>
        <DownloadContainer>
          <Content>
            <h2>
              <b>Descargá </b>ahora y <b>creá tu cuenta</b>
            </h2>
            <div>
              <img src={ios} alt="ios" />
              <img src={googleplay} alt="googleplay" />
            </div>
          </Content>
          <ImageContainer>
            <img src={mockup} alt="mockup" />
          </ImageContainer>
        </DownloadContainer>
      </DownloadSection>
    </>
  );
};

const DownloadSection = styled.div`
  height: auto;
  width: 100%;
  margin: auto;
  background-color: black;
  border-top: 1px solid #ff009c;
  background: linear-gradient(
    217deg,
    black,
    black,
    #800040 40.71%,
    #0d0d0d,
    black 70.71%,
    black
  );
`;

const DownloadContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: space-around;
  padding-top: 30px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 50px;
    letter-spacing: 0.02em;
    color: #ffffff;
    font-weight: 300;
    margin-top: 5px;
    max-width: 380px;
    b {
      font-family: "Roboto", sans-serif;
      font-weight: 600;
    }
  }

  img {
    height: 60px;
    padding-right: 20px;
    padding-bottom: 60px;
  }
`;

const ImageContainer = styled.div`
  img {
    height: 500px;
  }
`;
export default Download;
