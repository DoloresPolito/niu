import React from "react";
import styled from "styled-components";
import Navbar from "../structure/Navbar";
import Footer from "../structure/Footer";
import Download from "../home/Download";
import Cards from "../home/Cards";
import Into from "../home/Into";
import Sponsors from "../home/Sponsors";
import Pixel from "../home/Pixel";
import Cube from "../home/Cube";

import coin from "../assets/home/cover/Coin.png";
import bigcoin from "../assets/home/cover/Big coin.png";
import phone from "../assets/home/cover/Celu Mockup.png";

import SocialMedia from "../components/SocialMedia";
import RotatingComponent from "../components/RotatingComponent";
import MovingComponent from "../components/MovingComponent";

const Home = () => {
  return (
    <>
      <HomeSection>
        <Navbar />
        <Cover />
        <Pixel />
        <Cube />
        <Sponsors />
        <Into />
        <Cards />
        <Download />
        <Footer />
      </HomeSection>
    </>
  );
};

const Cover = () => {
  return (
    <>
      <CoverSection>
        <CoverContainer>
          <Column1>
            <div className="title">
              <h1>
                tu billetera a <br /> otro level.
              </h1>
            </div>

            <div className="subtitle">
              <div className="media">
                <SocialMedia />
              </div>
              <div>
                <p>
                  Pesos & Crypto <br />
                  <b>
                    {" "}
                    Manejá tus finanzas <br /> con n1u
                  </b>
                </p>
              </div>
            </div>

            <div className="button">
              <p>descargá la app</p>
            </div>
            <RotatingComponent>
              <div className="coin">
                <img src={coin} alt="coin" height={180} />
              </div>
            </RotatingComponent>
          </Column1>

          <Column2>
            <MovingComponent>
              <div>
                <img src={phone} alt="phone" height={550} />
              </div>
            </MovingComponent>
          </Column2>

          <Column3>
            <div className="title">
              <h2>Unite al n1uverse</h2>
            </div>
            <div>
              <p>
                Hecha por y para gamers <br />
                <b>Cumplí misiones y gana con n1u!</b>
              </p>
            </div>
            <div className="big-coin">
              <RotatingComponent>
                {" "}
                <img src={bigcoin} alt="bigcoin" height={220} />
              </RotatingComponent>

              <p>
                Ahorrá, transferí,
                <br /> pagá, swapeá <br />y hace recargas
                <br /> <b>en un solo lugar</b>
              </p>
            </div>
          </Column3>
        </CoverContainer>
      </CoverSection>
    </>
  );
};

const HomeSection = styled.div`
  min-height: 100vh;
  height: auto;
  width: 100%;
  margin: auto;
  background-color: white;
`;

const CoverSection = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  display: flex;
  background: linear-gradient(217deg, black, #ff009c 90.71%);
  padding-top: 120px;
`;

const CoverContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 0 auto;
  height: auto;
`;

const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -50px;

  .title {
    h1 {
      color: white;
      font-family: "Roboto", sans-serif;
      font-size: 74px;
      font-style: normal;
      font-weight: 800;
      line-height: 70px;
      letter-spacing: 0.5px;
      max-width: 450px;
    }
  }

  .subtitle {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: -20px;

    p {
      color: white;
      font-family: "Roboto", sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 300;
      line-height: 20px;
      letter-spacing: 0.5px;
    }
    .media {
      height: 30px;
      margin-top: 30px;
    }
  }

  .button {
    background-color: #ff009c;
    color: white;
    border-radius: 30px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-self: flex-end;
    height: 50px;
    width: 260px;
    margin-top: 20px;
    margin-bottom: 20px;
    cursor: pointer;
    p {
      color: white;
      font-family: "Roboto", sans-serif;
      font-size: 22px;
      font-style: normal;
      font-weight: 300;
      margin-top: 12px;
      letter-spacing: 0.5px;
    }
  }

  .coin {
    margin-top: -40px;
  }
`;

const Column2 = styled.div`
  margin-top: -30px;
`;

const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .title {
    padding-top: 60px;
  }

  .big-coin {
    display: flex;
    flex-direction: row;
    padding-top: 120px;
    justify-content: flex-end;
    align-items: flex-end;
    img {
      padding-right: 20px;
    }
  }

  h2 {
    color: white;
    font-family: "Roboto", sans-serif;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  p {
    color: white;
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin-top: -20px;
  }
`;

export default Home;
