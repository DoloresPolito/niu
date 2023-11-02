import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import piggybank from "../assets/home/homepixel/piggybank-pixel.svg";
import card from "../assets/home/homepixel/card-pixel.svg";
import coin from "../assets/home/homepixel/coin-pixel.svg";
import coins from "../assets/home/homepixel/coins-pixel.svg";

import piggybankmobile from "../assets/home/homepixel/nopixel/piggy-bank.png";
import cardmobile from "../assets/home/homepixel/nopixel/card-pixel.png";
import coinmobile from "../assets/home/homepixel/nopixel/coin-pixel.png";
import coinsmobile from "../assets/home/homepixel/nopixel/coins-pixel.png";

import Carousel from "react-elastic-carousel";

const Pixel = ({ height }) => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const medium = 870;

  const carouselRef = useRef(null);

  return (
    <>
      <PixelSection height={height}>
        {width > medium ? (
          <>
            <PixelContainer>
              <Item>
                <img src={width > 1020 ? card : cardmobile} alt="card" />
                <p>
                  Usá tu n1u card física o virtual Visa Internacional sin costo.
                </p>
              </Item>
              <Item>
                <img src={width > 1020 ? piggybank : piggybankmobile} alt="piggybank" />
                <p>Abrí tu cuenta gratis y sin intermediarios.</p>
              </Item>

              <Item>
                <img src={width > 1020 ? coin : coinmobile} alt="coin" />
                <p>Manejá tu platita cómo y dónde quieras.</p>
              </Item>
              <Item>
                <img src={width > 1020 ? coins : coinsmobile} alt="coins" />
                <p>Pagá con n1u y obtené recompensas.</p>
              </Item>
            </PixelContainer>
          </>
        ) : (
          <>
            <CarouselContainer>
              <Carousel
                itemsToShow={width > 640 ? 2.3 : 1.3}
     
                pagination={false}
                ref={carouselRef}
              
              >
                <Item>
                  <img src={cardmobile} alt="card" />
                  <p>
                    Usá tu n1u card física o virtual Visa Internacional sin
                    costo.
                  </p>
                </Item>
                <Item>
                  <img src={piggybankmobile} alt="piggybank" />
                  <p>Abrí tu cuenta gratis y sin intermediarios.</p>
                </Item>

                <Item>
                  <img src={coinmobile} alt="coin" />
                  <p>Manejá tu platita cómo y dónde quieras.</p>
                </Item>
                <Item>
                  <img src={coinsmobile} alt="coins" />
                  <p>Pagá con n1u y obtené recompensas.</p>
                </Item>
              </Carousel>
            </CarouselContainer>
          </>
        )}
      </PixelSection>
    </>
  );
};

const PixelSection = styled.div`
  height: ${(props) => (props.height === "80vh" ? "80vh" : "20vh")};
  width: 100%;
  background: #070707;
  position: absolute;
  margin-top: ${(props) => (props.height === "80vh" ? "1500px" : "0px")};
  bottom: ${(props) => (props.height === "80vh" ? "" : "0%")};
`;

const PixelContainer = styled.div`
  height: auto;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1600px;

  @media only screen and (max-width: 1020px) {
    width: 70%;
    height: auto;
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 775px) {
    width: 98%;
  }
`;

const Item = styled.div`
  height: auto;
  width: 250px;
  display: flex;
  justify-content: space-between;
  padding: 35px 0px;

  img {
    height: 100px;
    width: 100px;
  }

  p {
    font-size: 13px;
    margin: 10px 0;
    font-family: "LoRes";
    letter-spacing: 0.02em;
    font-weight: 400;
    max-width: 150px;
    color: white;
    padding-left: 15px;
    padding-top: 5px;
  }

  @media only screen and (max-width: 1020px) {
    width: 300px;

    img {
      height: 150px;
      width: 120px;
    }

    p {
      font-size: 15px;
    }
  }

  @media only screen and (max-width: 870px) {
    flex-direction: column-reverse;
    border: 1px solid #ff009c;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
    height: 300px;
    width: 230px;

    p {
      font-size: 15px;
      padding-top: 0px;
      padding-left: 0px;
    }

    img {
      height: 190px;
      width: 140px;
      padding-top: 10px;
    }

    @media only screen and (max-width: 365px) {
      width: 210px;
    }
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 50px 0;
  .rec-arrow {
    display: none;
  }
`;

export default Pixel;
