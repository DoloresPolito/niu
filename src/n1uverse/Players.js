import React from "react";
import styled from "styled-components";

import furia from "../assets/n1uverse/players/furia.png";
import n1uton from "../assets/n1uverse/players/n1uton.png";
import rebel from "../assets/n1uverse/players/Rebel.png";
import title from "../assets/n1uverse/players/Buttom.png";

function Players() {
  return (
    <>
      <PlayersSection>
        <PlayerContainer>
          <img src={title} alt="title" />

          <PlayerContent>
            <PlayerItem image={rebel} name="rebel" />
            <PlayerItem image={furia} name="n1uton" />
            <PlayerItem image={n1uton} name="alien" />
          </PlayerContent>
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

  img {
    height: 100px;
    width: 500px;
    align-self: center;
    padding: 80px;
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
  width: 303px;
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
      font-family: "Roboto", sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 300;
      letter-spacing: 0.5px;
      padding: 0 20px;
      line-height: 5px;
    }
  }

  img {
    height: 330px;
    margin-top: -40px;
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

export default Players;
