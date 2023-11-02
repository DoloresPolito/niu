import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Pixel from "../home/Pixel";
import ios from "../assets/home/homedownload/ios.svg";
import googleplay from "../assets/home/homedownload/google-play.svg";
import { Link } from "react-router-dom";

const Cover = () => {
  const [width, setWidth] = useState(null);
  const getWidth = () => divRef?.current?.offsetWidth;

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
      <CoverSection>
        <Video loop autoPlay muted>
          <source src="2gifhero-min.mp4" type="video/mp4" />
        </Video>
        {/* <Hero> */}
        <CoverContainer>
          <Column1>
            <div className="title">
              <h1>tu billetera a otro level.</h1>
            </div>
          </Column1>

          <Column3>
            <Content>
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
          </Column3>
        </CoverContainer>
        {/* </Hero> */}

        {totalWidth < 1020 ? (
          <>
            <Pixel height="80vh" />
          </>
        ) : (
          <>
            <Pixel height="20vh" />
          </>
        )}
      </CoverSection>
    </>
  );
};

const CoverSection = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;
  flex-direction: column;
  max-width: 1600px;
  margin: 0 auto;

  /* max-height: 1500px; */
`;

const Video = styled.video`
  /* width: 100%;
  height: 80vh ;
  position: absolute;
  top: 0%;
  left: 0%;
  z-index: 500;
  background-size: cover;
  background-position: 100% 100%; */



  width: 100%;
  height: 80vh;
  object-fit: cover;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

// const Hero = styled.div`
//   width: 100%;
//   height: 80vh;
//   background-color: black;
//   display: flex;
//   position: relative;
//   background-color: red;

//   background-size: cover;
//   background-position: center center;
//   position: absolute;
//   top: 0;
//   left: 0%;

//   @media only screen and (max-width: 1300px) {
//     background-position: left center;
//   }
//   @media only screen and (max-width: 1100px) {
//     background-position: center center;
//   }
//   @media only screen and (max-width: 1020px) {
//     height: 100vh;
//   }
// `;

const CoverContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 0 auto;
  height: auto;
  justify-content: space-between;
  max-width: 1600px;
  z-index: 500;
`;

const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 480px;

  .title {
    h1 {
      color: white;
      font-family: "LoRes";
      font-size: 60px;
      font-style: normal;
      font-weight: 400;
      line-height: 70px;
      max-width: 450px;

      @media only screen and (max-width: 1100px) {
        font-size: 50px;
        max-width: 400px;
      }
    }
  }
`;

const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;

  @media only screen and (max-width: 1300px) {
  }
  @media only screen and (max-width: 1100px) {
    align-items: flex-end;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 120px;
  width: 500px;
  img {
    height: 65px;
    padding-right: 40px;
    padding-bottom: 60px;
  }

  @media only screen and (max-width: 1300px) {
    justify-content: flex-end;
    width: 500px;
    img {
      height: 55px;
      padding-right: 30px;
      padding-bottom: 60px;
    }
  }

  @media only screen and (max-width: 1100px) {
    flex-direction: column;
    width: 200px;
    img {
      height: 55px;
      padding-right: 30px;
      padding-bottom: 30px;
    }
  }

  @media only screen and (max-width: 650px) {
    /* width: 330px;
    margin-left: 30px;
    img {
      height: 42px;
      padding-right: 8px;
      padding-bottom: 60px;
    }
*/
  }
`;

export default Cover;
