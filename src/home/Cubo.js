import React from "react";
import styled from "styled-components";
import cubogif from "../assets/home/homecube/Tarjeta gif.gif";

const GifContainer = styled.div`
  height: auto;
  width: auto;
  display: flex;
  margin-left: -120px;
  margin-top: -80px;
  background-color: black;
  img {
    height: 500px;
    width: 600px;
  }
`;

const CuboGif = () => {
  return (
    <GifContainer>
      <img src={cubogif} alt="Mi GIF" />
    </GifContainer>
  );
};

export default CuboGif;
