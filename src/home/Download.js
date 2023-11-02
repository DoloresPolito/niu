import React from "react";
import styled from "styled-components";
import ios from "../assets/home/homedownload/ios.svg";
import googleplay from "../assets/home/homedownload/google-play.svg";
import phone from "../assets/home/homedownload/newphone.svg";

const Download = () => {
  return (
    <>
      <DownloadSection >
        <DownloadContainer>
          <Content>
            <h2>
              <b>Descargá </b>ahora
              <br /> y <b> creá tu cuenta</b>
            </h2>
            <div>
              <img src={ios} alt="ios" />
              <img src={googleplay} alt="googleplay" />
            </div>
          </Content>
          <ImageContainer>
            <img src={phone} alt="phone" />
          </ImageContainer>
        </DownloadContainer>
      </DownloadSection>
    </>
  );
};

const DownloadSection = styled.div`
  height: 60vh;
  width: 100%;
  margin: auto;
  background-color: black;
  background-image: url("/backgrounds/download-light.png");
  background-size: cover;
  background-position: center;
  max-width: 1600px;
  margin: 0 auto;
  @media only screen and (max-width: 650px) {
    border-top: none;
  }
`;

const DownloadContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: space-around;
  padding-top: 30px;
  /* height: 60vh; */
  max-width: 1600px;


`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  width: 420px;

  @media only screen and (max-width: 650px) {
    margin-top: 0px;
  }

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 54px;
    color: #ffffff;
    font-weight: 300;
    margin-top: 5px;
    width: 100%;

    b {
      font-family: "Roboto", sans-serif;
      font-weight: 600;
    }
  }

  img {
    height: 60px;
    padding-right: 15px;
    padding-bottom: 60px;
  }

  @media only screen and (max-width: 650px) {
    width: 330px;
    margin-left: 30px;
    img {
      height: 42px;
      padding-right: 8px;
      padding-bottom: 60px;
    }
    h2 {
      font-family: "Roboto", sans-serif;
      font-size: 38px;
      color: #ffffff;
      font-weight: 300;
      margin-top: 5px;
      width: 100%;
    }
  }
`;

const ImageContainer = styled.div`
  img {
    height: 500px;
  }

  @media only screen and (max-width: 650px) {
    img {
      height: 350px;
    }
  }
`;
export default Download;
