import React from "react";
import styled from "styled-components";

const CuboGif = () => {
  return (
    <>
    <Video loop autoPlay muted>
      <source src="cube-black-min.mp4" type="video/mp4" />
    </Video>
 
    </>  );
};

const Video = styled.video`
  height: 600px;
  width: 700px;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1000;

  @media only screen and (max-width: 1145px) {
    height: 560px;
    width: 700px;
  }

  @media only screen and (max-width: 1000px) {
    height: 500px;
    width: 600px;
  }

  @media only screen and (max-width: 900px) {
    height: 400px;
    width: 500px;
  }
  @media only screen and (max-width: 500px) {
    height: 330px;
    width: 400px;
  }

  @media only screen and (max-width: 420px) {
    height: 300px;
    width: 350px;
  }
`;

export default CuboGif;
