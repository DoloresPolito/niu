import React from "react";
import styled from "styled-components";
import cubogif from "../assets/home/homecube/Tarjeta gif.gif";

const GifContainer = styled.div`
  height: auto;
  width: auto;
  display: flex;
  justify-content: center;
  img {
    height: 690px;
    width: 800px;
  }
  @media only screen and (max-width: 1200px) {
    img {
    height: 590px;
    width: 700px;
  }
  }

  @media only screen and (max-width: 1000px) {
   
    img {
    height: 500px;
    width: 600px;
  }
  }

  @media only screen and (max-width: 900px) {
    img {
      height: 400px;
      width: 500px;
    }
  }
 @media only screen and (max-width: 500px) {
    img {
      height: 330px;
      width: 400px;
    }
  }

@media only screen and (max-width: 420px) {
    img {
      height: 300px;
      width: 350px;
    }
  }

   /*   @media only screen and (max-width: 370px) {
    img {
      height: 250px;
      width: 300px;
    }
  } */
`;

const CuboGif = () => {
  return (
    <GifContainer>
      <img src={cubogif} alt="Mi GIF" />
    </GifContainer>
  );
};

export default CuboGif;
