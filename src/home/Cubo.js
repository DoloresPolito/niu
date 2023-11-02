import React from "react";
import styled from "styled-components";
import cubogif from "../assets/home/homecube/cube-black.gif";
import anillo from "../assets/home/homecube/anillo.png"

const GifContainer = styled.div`
  height: auto;
  width: auto;
  display: flex;
  justify-content: center;
  position: relative;

  .anillo{
    position: absolute;
    height: 200px;
    width: 700px;
    top:30%
  }
  img {
    height: 620px;
    width: 750px;
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
      <img src={cubogif} alt="Mi GIF" className="cube"/>
      <img src={anillo} alt="anillo"className="anillo"/>
    </GifContainer>
  );
};

export default CuboGif;
