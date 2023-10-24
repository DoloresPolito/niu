import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import rayo1 from "../assets/n1uverse/n1uverseicons/ray1.svg";
import rayo2 from "../assets/n1uverse/n1uverseicons/ray2.svg";
import rayo3 from "../assets/n1uverse/n1uverseicons/ray3.svg";
import rayo4 from "../assets/n1uverse/n1uverseicons/ray4.svg";
import comunitydesktop from "../assets/n1uverse/n1uverseicons/comunity-desktop.svg";
import comunitymobile from "../assets/n1uverse/n1uverseicons/comunity-mobile.svg";

import textmobile from "../assets/n1uverse/n1uverseicons/texto-mobile.svg";
import { Parallax } from "react-scroll-parallax";

function Comunity() {
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
      <ComunitySection>
        {totalWidth > medium ? (
          <>
            <div className="top">
              <Parallax speed={10}>
                <Rayo2 src={rayo2} alt="rayo2" />
              </Parallax>
             
              <Parallax speed={40}>
                <Rayo1 src={rayo1} alt="rayo1" />
              </Parallax>
            </div>
            <Parallax speed={-5}>
              <SectionContainer>
                <BackgroundImage src={comunitydesktop} alt="comunity" />
              </SectionContainer>
            </Parallax>
            <div className="bottom">
              <Parallax speed={10}>
                <Rayo3 src={rayo3} alt="rayo2" />
              </Parallax>
             
              <Parallax speed={10}>
                <Rayo4 src={rayo4} alt="rayo1" />
              </Parallax>
            </div>
          </>
        ) : (
          <>
            <SectionContainerMobile>
              <TextContainer>
                <img src={textmobile} alt="text" />
              </TextContainer>
              <ImageMobile src={comunitymobile} alt="comunity" />
            </SectionContainerMobile>
          </>
        )}
      </ComunitySection>
    </>
  );
}

const ComunitySection = styled.div`
  width: 100%;
  height: auto;

  .top {
    display: flex;
    justify-content: space-between;
    height: 50px;
  }

  .bottom{
    display: flex;
    justify-content: space-between;
    height: 50px;
  }
`;

const SectionContainer = styled.div`
  position: relative;
  width: 90%;
  height: 700px;
  overflow: hidden;
  margin: 0 auto;
  padding-top: -50px;
  @media only screen and (max-width: 1200px) {
    /* margin-top: 350px; */
  }
`;

const SectionContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 0 auto;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  max-height: 120%;
  min-width: 800px;


  @media only screen and (max-width: 1000px) {
    min-width: 900px;
  }

  @media only screen and (max-width: 900px) {
    max-width: 90%;
    max-height: 90%;
    min-width: 500px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 400px;
  width: 100%;
  margin-top: 30px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const ImageMobile = styled.img`
  max-width: 70%;
  max-height: 70%;
  min-width: 400px;
  margin-top: -180px;
  @media only screen and (max-width: 400px) {
    min-width: 300px;
  }
`;

const Rayo1 = styled.img`
  height: 400px;
  transform: translateY(50%);
  transform: translateX(0%);
`;

const Rayo4 = styled.img`
  height: 400px;
  transform: translateY(-100%) !important;
  transform: translateX(0%);

`;

const Rayo2 = styled.img`
  height: 200px;
  transform: translateY(0%);
  transform: translateX(30%);
`;

const Rayo3 = styled.img`
  height: 400px;
  transform: translateY(-100%) !important;
  transform: translateX(0%);
  margin-left: -60px;
`;

export default Comunity;
