import React from "react";
import styled from "styled-components";
import ios from "../assets/home/homedownload/ios.svg";
import googleplay from "../assets/home/homedownload/google-play.svg";
import phone from "../assets/home/homedownload/phone-min.png";
import { Link } from "react-router-dom";
import AnimatedText from "../components/AnimatedText";
const Download = () => {
  return (
    <>
      <DownloadSection>
        <DownloadContainer>
          <Content>
            <AnimatedText>

 
            <h2>
              <b>Descargá </b>ahora
              <br /> y <b> creá tu cuenta</b>
            </h2>
            </AnimatedText>
            <div>
              <Link
                to="https://apps.apple.com/ar/app/n1u/id6446706311?l=en"
                target="_blank"
              >
                <img src={ios} alt="ios" />
              </Link>
              <Link
                to="https://play.google.com/store/apps/details?id=n1u.app&pli=1"
                target="_blank"
              >
                <img src={googleplay} alt="googleplay" />
              </Link>
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
  height: 100vh;
  width: 100%;
  margin: auto;
  background-color: black;
  background-image: url("/backgrounds/download-light-min.png");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  position: relative;
  margin: 0 auto;
`;

const DownloadContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  justify-content: space-around;
  /* padding-top: 30px; */
  max-width: 1600px;
  position: absolute;
  bottom: 0;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  width: 440px;
  align-items: center;

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 60px;
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
  }

  @media only screen and (max-width: 960px) {
    width: 400px;
    h2 {
      font-size: 52px;
    }
    img {
      height: 54px;
      padding-right: 15px;
    }
  }

  @media only screen and (max-width: 900px) {
    margin-top: 0px;
    width: auto;
    height: 160px;

    h2 {
      font-size: 40px;
    }
    img {
      height: 42px;
      margin-top: -20px;
    }
  }

  @media only screen and (max-width: 360px) {
    h2 {
      font-size: 37px;
    }
    img {
      height: 40px;
      margin-top: -20px;
    }
  }
`;

const ImageContainer = styled.div`
  img {
    height: 570px;
  }

  @media only screen and (max-width: 1140px) {
    img {
      height: 500px;
    }
  }

  @media only screen and (max-width: 900px) {
    img {
      height: 380px;
    }
  }

  @media only screen and (max-width: 360px) {
    img {
      height: 360px;
    }
  }
`;
export default Download;
