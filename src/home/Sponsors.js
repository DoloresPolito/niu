import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import lanacion from "../assets/home/homesponsors/la nacion-min.png";
import filonews from "../assets/home/homesponsors/filonews-min.png";
import forbes from "../assets/home/homesponsors/forbes.svg";
import iproup from "../assets/home/homesponsors/ipro-up.svg";
import { Link } from "react-router-dom";

const Sponsors = ({ size }) => {
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
      <SponsorsSection size={size}>
        <SponsorsContainer>
          <Link
            to="https://www.forbesargentina.com/innovacion/identificaron-segmento-bancarizar-crearon-una-plataforma-servicios-financieros-enfocada-mundo-gamer-n31459"
            target="_blank"
          >
            <SponsorItem>
              <img src={forbes} alt="forbes" />
            </SponsorItem>
          </Link>
          <Link
            to="https://www.lanacion.com.ar/economia/negocios/historias-que-inspiran-es-emprendedor-y-descubrio-un-negocio-que-cruza-el-gaming-con-las-finanzas-nid11092023/"
            target="_blank"
          >
            <SponsorItem>
              <img
                src={lanacion}
                alt="la nacion"
                style={{ height: "45px", width: "170px" }}
              />
            </SponsorItem>
          </Link>
          <Link
            to="https://www.iproup.com/finanzas/39465-n1u-asi-es-la-nueva-billetera-digital-pensada-para-los-gamers"
            target="_blank"
          >
            <SponsorItem>
              <img src={iproup} alt="iproup" />
            </SponsorItem>
          </Link>
          <Link
            to="https://www.filo.news/noticia/2023/04/24/llego-la-primera-superapp-de-la-region-de-que-se-trata"
            target="_blank"
          >
            <SponsorItem className="filo.news">
              <img src={filonews} alt="filo.news" style={{ height: "40px" }} />
            </SponsorItem>
          </Link>
        </SponsorsContainer>
      </SponsorsSection>
    </>
  );
};

const SponsorsSection = styled.div`
  height: ${(props) => (props.size === "desktop" ? "25vh" : "100vh")};
  width: 100%;
  margin: auto;
  background: #cebdf2;
  display: flex;
  justify-content: center;
`;

const SponsorsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: auto;
  width: 90%;
  padding-top: 20px;
  padding-bottom: 20px;
  max-width: 1600px;

  @media only screen and (max-width: 1020px) {
    flex-direction: column !important;
    justify-content: center;
  }
`;

const SponsorItem = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s, box-shadow 0.3s;
  cursor: pointer;
  height: 130px;
  width: 280px;

  img {
    height: 60px;
    width: 180px;
  }

  &:hover {
    background-color: #ff009c;
  }

  @media only screen and (max-width: 1300px) {
    height: 120px;
    width: 240px;
    img {
      height: 50px;
      width: 150px;
    }
  }

  @media only screen and (max-width: 1020px) {
    border: 0px solid #cebdf2;
  }

  @media only screen and (max-width: 1100px) {
    height: 120px;
    width: 210px;
  }

  @media only screen and (max-width: 930px) {
    height: 120px;
    width: 200px;
    img {
      height: 40px;
      width: 140px;
    }
  }

  @media only screen and (max-width: 800px) {
    border: 0px solid #cebdf2;
    height: auto;
    margin: 30px 0px;

    img {
      height: 50px;
      width: 150px;
    }
    &:hover {
      background-color: #cebdf2;
    }
  }
`;

export default Sponsors;
