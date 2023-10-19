import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

import furia from "../assets/n1uverse/players/furia.svg";
import n1uton from "../assets/n1uverse/players/n1uton.svg";
import rebel from "../assets/n1uverse/players/rebel.svg";
import title from "../assets/n1uverse/players/players-title.svg";

import Carousel from "react-elastic-carousel";

import buttonright from "../assets/n1uverse/players/button-right.svg";
import buttonleft from "../assets/n1uverse/players/button-left.svg";

function Players() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const medium = 850;

  const carouselRef = useRef(null);

  return (
    <>
      <PlayersSection>
        <PlayerContainer>
          <img src={title} alt="title" />

          {width > medium ? (
            <>
              <PlayerContent>
                <PlayerItem image={rebel} name="rebel" />
                <PlayerItem image={furia} name="n1uton" />
                <PlayerItem image={n1uton} name="alien" />
              </PlayerContent>
            </>
          ) : (
            <>
              <CarouselContainer>
                <Carousel
                  itemsToShow={width > 600 ? 2 : 1.3}
                  enableTilt={true}
                  pagination={false}
                  ref={carouselRef}
                >
                  <PlayerItem image={rebel} name="rebel" />
                  <PlayerItem image={furia} name="n1uton" />
                  <PlayerItem image={n1uton} name="alien" />
                </Carousel>

                <ButtonContainer>
                  <img
                    LeftButton
                    onClick={() => carouselRef.current.slidePrev()}
                    src={buttonleft}
                    alt="button left"
                  />

                  <img
                    onClick={() => carouselRef.current.slideNext()}
                    src={buttonright}
                    alt="button right"
                  />
                </ButtonContainer>
              </CarouselContainer>
            </>
          )}
        </PlayerContainer>
      </PlayersSection>
    </>
  );
}

const PlayerItem = ({ image, name }) => (
  <>
    <ItemContainer>
      <PlayerBox>
        <img src={image} alt="player" />
        <button>
          <p>{name}</p>
        </button>
      </PlayerBox>
      <Text>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s has been the industry's standard dummy text ever since the 1500s
        </p>
      </Text>
    </ItemContainer>
  </>
);

const PlayersSection = styled.div`
  width: 100%;
  height: auto;
`;
const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: auto;
  margin: 0 auto;

  @media only screen and (max-width: 850px) {
    width: 100%;
  }

  img {
    height: 100px;
    width: 500px;
    align-self: center;
    padding: 80px;

    @media only screen and (max-width: 600px) {
      height: 70px;
      width: 290px;
      padding: 40px;
    }
  }
`;

const PlayerContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 303px;
  height: auto;
`;

const PlayerBox = styled.div`
  border: 1px solid white;
  height: 290px;
  width: 300px;
  display: flex;
  justify-content: center;
  position: relative;
  button {
    position: absolute;
    bottom: 0;
    border: none;
    margin-bottom: 10px;
    background-color: #ff009c;
    color: white;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-self: flex-end;
    height: 37px;
    width: auto;

    cursor: pointer;
    p {
      color: white;
      font-family: "Pixelify Sans", sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 300;
      letter-spacing: 0.5px;
      padding: 0 20px;
      justify-content: center;
      align-self: center;
    }
  }

  img {
    height: 330px;
    margin-top: -40px;
  }

  @media only screen and (max-width: 1000px) {
    width: 250px;
  }
`;

const Text = styled.div`
  height: 100px;
  padding: 0px 10px;

  p {
    font-size: 12px;
    font-family: "Roboto", sans-serif;
    letter-spacing: 0.02em;
    font-weight: 300;
    color: white;
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 50px;

  img {
    height: 30px;
    width: 60px;
    cursor: pointer;
    margin: 0;
    padding: 0;
  }
`;

export default Players;
