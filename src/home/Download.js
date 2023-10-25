import React from "react";
import styled from "styled-components";
import ios from "../assets/home/homedownload/ios.svg";
import googleplay from "../assets/home/homedownload/google-play.svg";
import phone from "../assets/home/homedownload/phone.svg";

const Download = () => {
  return (
    <>
      <DownloadSection>
        <DownloadContainer>
          <Content>
            <h2>
              <b>Descargá </b>ahora<br/> y <b> creá tu cuenta</b>
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
  width: 420px;

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
