import React, { useEffect, useState, useRef } from "react";
import styled  from 'styled-components';
import title from "../assets/n1uverse/players/title-players-min.png";
import alienbox from "../assets/n1uverse/players/alien-box-min.png";
import n1utonbox from "../assets/n1uverse/players/n1uton-box-min.png";
import rebelbox from "../assets/n1uverse/players/rebel-box-min.png";
import buttonright from "../assets/n1uverse/players/button-right.svg";
import buttonleft from "../assets/n1uverse/players/button-left.svg";

import Carousel from "react-elastic-carousel";
import AnimatedText from "../components/AnimatedText";

function Players() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const medium = 950;

  const carouselRef = useRef(null);


  return (
    <>

      <PlayersSection>
        <PlayerContainer>
          <img src={title} alt="title" className="title" />

          {width > medium ? (
            <>
              <AnimatedText>
                <PlayerContent>
                  <PlayerItem image={rebelbox} name="rebel" />
                  <PlayerItem image={n1utonbox} name="n1uton" />
                  <PlayerItem image={alienbox} name="alien" />
                </PlayerContent>
              </AnimatedText>
            </>
          ) : (
            <>
              <CarouselContainer>
                <Carousel
                  itemsToShow={width > 760 ? 2 : width > 370 ? 1.3 : 1 }
          
                  pagination={false}
                  ref={carouselRef}
        
                >
                  <PlayerItem image={rebelbox} name="rebel" />
                  <PlayerItem image={n1utonbox} name="n1uton" />
                  <PlayerItem image={alienbox} name="alien" />
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
      <AnimatedText>
        <Text>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s has been the industry's standard dummy text ever since the
            1500s
          </p>
        </Text>
      </AnimatedText>
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
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding-bottom: 50px;
  .top {
    display: flex;
    justify-content: space-between;
  }

  @media only screen and (max-width: 1200px) {
    width: 100%;
  }

  .title {
    height: 100%;
    width: 50%;
    padding-bottom: 110px;
    align-self: center;

    @media only screen and (max-width: 950px) {
      width: 80%;
      padding-bottom: 40px;
    }

    @media only screen and (max-width: 800px) {
      padding-bottom: 0px;
      padding-top: 40px;
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
  width: 370px;
  height: auto;

  @media only screen and (max-width: 1200px) {
    width: 350px;
  }
`;

const PlayerBox = styled.div`
  height: 350px;
  width: 370px;
  display: flex;
  justify-content: center;
  position: relative;

  @media only screen and (max-width: 1200px) {
    height: 320px;
    width: 350px;
  }

  @media only screen and (max-width: 1070px) {
    width: 310px;
    height: 320px;
  }

  @media only screen and (max-width: 950px) {
    height: 420px;
    width: 370px;
    align-items: flex-end;
  }

  @media only screen and (max-width: 500px) {
    height: 420px;
    width: 330px;
    align-items: flex-end;
  }
  @media only screen and (max-width: 480px) {
    height: 420px;
    width: 260px;
    align-items: flex-end;
  }
  button {
    position: absolute;
    bottom: 2%;
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
    @media only screen and (max-width: 480px) {
      margin-bottom: 50px;
    }

    cursor: pointer;
    p {
      color: white;
      font-family: "LoRes";
      font-size: 18px;
      font-style: normal;
      font-weight: 300;
      letter-spacing: 0.5px;
      padding: 0 20px;
      justify-content: center;
      align-self: center;
      @media only screen and (max-width: 480px) {
        font-size: 16px;
      }
    }
  }

  img {
    height: 420px;
    width: 95%;
    margin-top: -70px;

    @media only screen and (max-width: 1200px) {
      margin-top: -70px;
    }
  }
`;

const Text = styled.div`
  height: 100px;
  padding: 0px 20px;
  @media only screen and (max-width: 1200px) {
    padding: 40px 20px 0px 20px;
  }
  @media only screen and (max-width: 1070px) {
    padding: 20px 20px 0px 20px;
  }

  @media only screen and (max-width: 950px) {
    padding: 0px 20px;
  }

  p {
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    letter-spacing: 0.02em;
    font-weight: 300;
    color: #fff;
    line-height: 118%;
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
