import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import piggybank from "../assets/home/homepixel/piggybank-pixel.svg";
import card from "../assets/home/homepixel/card-pixel.svg";
import coin from "../assets/home/homepixel/coin-pixel.svg";
import coins from "../assets/home/homepixel/coins-pixel.svg";
import Carousel from "react-elastic-carousel";

const Pixel = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const medium = 775;

  const carouselRef = useRef(null);

  return (
    <>
      <PixelSection>
        {width > medium ? (
          <>
            <PixelContainer>
              <Item>
                <img src={card} alt="card" />
                <p>
                  Usá tu n1u card física o virtual Visa Internacional sin costo.
                </p>
              </Item>
              <Item>
                <img src={piggybank} alt="piggybank" />
                <p>Abrí tu cuenta gratis y sin intermediarios.</p>
              </Item>

              <Item>
                <img src={coin} alt="coin" />
                <p>Manejá tu platita cómo y dónde quieras.</p>
              </Item>
              <Item>
                <img src={coins} alt="coins" />
                <p>Pagá con n1u y obtené recompensas.</p>
              </Item>
            </PixelContainer>
          </>
        ) : (
          <>
            <CarouselContainer>
              <Carousel
                itemsToShow={width > 640 ? 2.3 : 1.3}
                enableTilt={true}
                pagination={false}
                ref={carouselRef}
              >
                <Item>
                  <img src={card} alt="card" />
                  <p>
                    Usá tu n1u card física o virtual Visa Internacional sin
                    costo.
                  </p>
                </Item>
                <Item>
                  <img src={piggybank} alt="piggybank" />
                  <p>Abrí tu cuenta gratis y sin intermediarios.</p>
                </Item>

                <Item>
                  <img src={coin} alt="coin" />
                  <p>Manejá tu platita cómo y dónde quieras.</p>
                </Item>
                <Item>
                  <img src={coins} alt="coins" />
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
  height: auto;
  width: 100%;
  margin: auto;
  background: #070707;
`;

const PixelContainer = styled.div`
  height: auto;
  width: 98%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;

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
  padding: 35px 10px;

  img {
    height: 100px;
    width: 100px;
  }

  p {
    font-size: 13px;
    margin: 10px 0;
    font-family: 'LoRes';
    letter-spacing: 0.02em;
    font-weight: 400;
    max-width: 150px;
    color: white;
    padding-left: 15px;
    padding-top: 5px;
  }

  @media only screen and (max-width: 775px) {
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
