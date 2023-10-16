import React from "react";
import styled from "styled-components";
import beneficios from "../assets/home/beneficios.png";
import n1ustatus from "../assets/home/n1ustatus.png";
import { Link } from "react-router-dom";

const Cards = () => {
  const cards = [
    {
      title: "n1u status",
      text: "Viví en tiempo real el funcionamiento de la app",
      image: beneficios,
      link: "/features",
    },
    {
      title: "Beneficios",
      text: "Conocé todos los beneficios que tenemos para vos",
      image: n1ustatus,
      link: "/benefits",
    },
  ];
  return (
    <>
      <CardsSection>
        <CardsContainer>
          {cards.map((card, index) => (
            <Link to={card.link} style={{ textDecoration: "none" }}>
              <Item key={index} backgroundimage={card.image}>
                <Content>
                  <h1>{card.title}</h1>
                  <div>
                    <h6>{card.text}</h6>
                    <button>
                      <p>conocé más</p>
                    </button>
                  </div>
                </Content>
              </Item>
            </Link>
          ))}
        </CardsContainer>
      </CardsSection>
    </>
  );
};

const CardsSection = styled.div`
  height: auto;
  width: 100%;
  margin: auto;
  background-color: black;
  border-top: 1px solid #ff009c;
  background-color: black;
`;

const CardsContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  height: auto;
  justify-content: space-around;
  padding: 50px 0;
`;

const Item = styled.div`
  height: 300px;
  width: 500px;
  background-image: url(${(props) => props.backgroundimage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  text-align: start;
  color: black;
  margin: 30px 0px;
  border-radius: 15px;

  h1 {
    font-size: 24px;
    margin: 10px 0;
    font-family: "Roboto", sans-serif;
    letter-spacing: 0.02em;
    font-weight: 500;
    margin-top: 5px;
    max-width: 380px;
  }
  h6 {
    font-size: 16px;
    margin: 10px 0;
    font-family: "Roboto", sans-serif;
    letter-spacing: 0.02em;
    font-weight: 300;
    margin-top: 5px;
    max-width: 280px;
  }
  p {
    font-size: 12px;
    margin: 10px 0;
    font-family: "Roboto", sans-serif;
    letter-spacing: 0.02em;
    font-weight: 500;
    margin-top: 5px;
    max-width: 280px;
  }
`;

const Content = styled.div`
  padding-bottom: 20px;
  padding-left: 20px;
  width: 100%;

  div {
    display: flex;
    justify-content: flex-start;
  }

  button {
    border-radius: 20px;
    background-color: transparent;
    height: 30px;
    width: 90px;
    border: 1px solid black;
    margin-left: 85px;
    margin-top: 17px;
  }
`;
export default Cards;
