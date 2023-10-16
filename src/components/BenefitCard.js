import React from "react";
import styled from "styled-components";
import { CardTitle, CardText, CardLink } from "../styles/texts";

function BenefitCard({ card, index}) {
  return (
    <>
      <Card key={index}>
        <div className="logo">
          <img src={card.logo} alt="card logo"/>
        </div>

        <div>
          <CardTitle>{card.title} </CardTitle>
          <CardText>{card.content} </CardText>
          <CardLink>ver más</CardLink>
        </div>
      </Card>
    </>
  );
}

const Card = styled.div`
  color: white;
  letter-spacing: 0.02em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 20px;
  height: auto;
  width: 280px;
  margin-bottom: 60px;

  div {
    width: 100%;
  }

  .logo {
    height: 80px;
    width: 60px;
    display: flex;
    justify-content: center;
    align-self: center;
    margin-top: -60px;
    border-radius: 15px;
    background-size: cover;
    background-position: center;
  }

  img {
    height: 80px;
    width: 80px;
  }
`;

export default BenefitCard;
