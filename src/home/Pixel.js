import React from "react";
import styled from "styled-components";
import piggybank from "../assets/home/homepixel/piggybank-pixel-min.png";
import card from "../assets/home/homepixel/card-pixel-min.png";
import coin from "../assets/home/homepixel/coin-pixel-min.png";
import coins from "../assets/home/homepixel/coins-pixel-min.png";

const Pixel = () => {


  return (
    <>
      <PixelSection>
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
      </PixelSection>
    </>
  );
};

const PixelSection = styled.div`
  height: 20vh;
  width: 100%;
  background: #070707;
  position: absolute;
  bottom: 0%;
  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const PixelContainer = styled.div`
  height: 20vh;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1600px;

  @media only screen and (max-width: 1145px) {
  }
`;

const Item = styled.div`
  height: auto;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;


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

  @media only screen and (max-width: 1145px) {
    width: 220px;
    padding: 10px 0px;
    justify-content: center;

    img {
      height: 80px;
      width: 80px;
    }

    p {
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 1000px) {
    p {
      font-size: 11px;
    }
  }

  @media only screen and (max-width: 915px) {
    width: 170px;
    padding: 5px 0px;

    img {
      height: 80px;
    }

    p {
      font-size: 10px;
    }
  }
`;

export default Pixel;
