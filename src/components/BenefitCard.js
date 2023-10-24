import React from "react";
import styled from "styled-components";
import { CardTitle, CardText, CardLink } from "../styles/texts";

function BenefitCard({ card, index }) {
  return (
    <>
      <Card key={index}>
        <div className="logo">
          <img src={card.logo} alt="card logo" />
        </div>

        <div className="card-content">
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
  height: 140px;
  width: 300px;
  margin-bottom: 60px;
  position: relative;


  @media only screen and (max-width: 400px) {
    height: 110px;
    width: 250px;
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

  .card-content {
    margin-top: 10px;
    height: 100px;
  }

  /* ${CardTitle}, ${CardText}, ${CardLink} {
    margin-bottom: 0px; 
  } */
`;

export default BenefitCard;
