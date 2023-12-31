import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Navbar from "../structure/Navbar";
import Footer from "../structure/Footer";
import Download from "../home/Download";
import Cards from "../home/Cards";
import Into from "../home/Into";
import Pixel from "../home/Pixel";
import Cube from "../home/Cube";
import CoverMobile from "../home/CoverMobile";
import bigcoin from "../assets/home/homecover/big-coin.svg";
import SocialMedia from "../components/SocialMedia";
import lines from "../assets/home/homecover/lines-button.svg";
import AnimatedText from "../components/AnimatedText";

// import { SmoothProvider } from "react-smooth-scrolling";
// import SmoothScroll from "../components/SmoothScroll";

const Home = () => {
  const [width, setWidth] = useState(null);
  const getWidth = () => divRef?.current?.offsetWidth;
  const medium = 900;
  const divRef = useRef(null);

  const [totalWidth, setTotalWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setTotalWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(getWidth());
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <HomeSection>
        <Navbar />

        {totalWidth < medium ? (
          <>
            <CoverMobile />
          </>
        ) : (
          <>
            <Cover />
          </>
        )}

        <Pixel />

        <Cube />

        <Into />

        <Section>
          <Cards />
        </Section>
        <Section>
          <Download />
        </Section>
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
                tu billetera a <br /> <b>otro level.</b>
              </h1>
  
            </div>

            <div className="subtitle">
              <div className="media">
                <SocialMedia view="cover" />
              </div>
              <div>
                <AnimatedText>
                  <p>
                    Pesos & Crypto <br />
                    <b>
                      {" "}
                      Manejá tus finanzas <br /> con n1u
                    </b>
                  </p>
                </AnimatedText>
              </div>
            </div>

            <ButtonContainer>
              <Lines src={lines} alt="lines" />
              <div className="button">
                <p>descargá la app</p>
              </div>
            </ButtonContainer>

            {/* <div className="coin">
              <img src={coin} alt="coin" height={180} />
            </div> */}
          </Column1>

          <Column2>
            <div></div>
          </Column2>

          <Column3>
            <div className="title">
              <h2>Unite al n1uverse</h2>
            </div>
            <div>
              <AnimatedText>
                <p>
                  Hecha por y para gamers <br />
                  <b>
                    ¡Cumplí misiones y gana
                    <br /> con n1u!
                  </b>
                </p>
              </AnimatedText>
            </div>
            <div className="big-coin">
              <img src={bigcoin} alt="bigcoin" height={220} />
              <AnimatedText>
                <p className="bottom-text">
                  Ahorrá, transferí,
                  <br /> pagá, swapeá <br />y hace recargas
                  <br /> <b>en un solo lugar</b>
                </p>
              </AnimatedText>
            </div>
          </Column3>
        </CoverContainer>
      </CoverSection>
    </>
  );
};

const Section = styled.div`
  background-color: #141414;
  height: auto;
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
  position: relative;
  background-image: url("/coins-gif.gif");
  background-size: cover;
  background-position: left;
`;

const CoverContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 0 auto;
  height: auto;
  justify-content: space-between;
`;

const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 480px;

  .title {
    h1 {
      color: white;
      font-family: "Roboto", sans-serif;
      font-size: 82px;
      font-style: normal;
      font-weight: 500;
      line-height: 70px;
      letter-spacing: 0.5px;
      max-width: 480px;


      b {
        font-family: "LoRes";
        font-size: 70px;
      }
    }
  }

  .subtitle {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 0px;

    p {
      color: #e8e9ee;
      font-family: "Roboto", sans-serif;
      font-size: 15px;
      font-style: normal;
      font-weight: 300;
      line-height: 16px;
      letter-spacing: 0.5px;
      text-align: right;

      b {
        font-weight: 700;
      }
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
    width: 280px;
    margin-top: 40px;

    cursor: pointer;
    z-index: 10;
    position: absolute;
    left: 15%;

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
    margin-top: -70px;
  }
`;

const Column2 = styled.div`
  margin-top: -30px;
  width: auto;
  margin-left: -30px;
`;

const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 400px;

  margin-top: 160px;

  @media only screen and (max-width: 1300px) {
    display: none;
  }

  .title {
    padding-top: 0px;
  }

  .big-coin {
    display: flex;
    flex-direction: row;
    padding-top: 130px;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    img {
      position: absolute;
      top: 0%;
      left: -5%;
    }
  }

  h2 {
    color: white;
    font-family: "Roboto", sans-serif;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0.5px;
    margin-left: -40px;
  }

  p {
    color: #e8e9ee;
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: 16px;
    letter-spacing: 0.5px;
    margin-top: -20px;
    margin-left: -40px;
  }

  .bottom-text {
    margin-left: 120px;
    text-align: end;
  }
`;

const ButtonContainer = styled.div`
  height: 100px;
  width: 200px;
  position: relative;
  margin-left: 170px;
  margin-bottom: 50px;
`;

const Lines = styled.img`
  position: absolute;
  z-index: 1;
`;

export default Home;
