import React from "react";
import styled from "styled-components";
import alcancia from "../assets/home/pixel/Alcancia pixel.png";
import card from "../assets/home/pixel/card 3 pixel.png";
import coin from "../assets/home/pixel/coin pixel.png";
import coins from "../assets/home/pixel/Coins pixel.png";

const Pixel = () => {
  return (
    <>
      <PixelSection>
        <PixelContainer>
          <Item>
            <img src={card} alt="card" />
            <p>
              Usá tu n1u card física o virtual Visa Internacional sin costo.
            </p>
          </Item>
          <Item>
            <img src={alcancia} alt="alcancia" />
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
      </PixelSection>
    </>
  );
};

const PixelSection = styled.div`
  height: auto;
  width: 100%;
  margin: auto;
  background: black;
`;

const PixelContainer = styled.div`
  height: auto;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 auto;
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
    font-size: 16px;
    margin: 10px 0;
    font-family: "Roboto", sans-serif;
    letter-spacing: 0.02em;
    font-weight: 400;
    max-width: 150px;
    color: white;
    padding-left: 15px;
    padding-top:  5px;
  }
`;

export default Pixel;
