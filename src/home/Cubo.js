import React from "react";
import styled from "styled-components";
// import cubogif from "../assets/home/homecube/cube-black-min.gif";
// import anillo from "../assets/home/homecube/anillo.png"


// const GifContainer = styled.div`
//   height: auto;
//   width: auto;
//   display: flex;
//   justify-content: center;
//   position: relative;
//   z-index: 1000;

//   .anillo {
//     position: absolute;
//     height: 200px;
//     width: 700px;
//     top: 30%;
//   }
//   video {
//     height: 620px;
//     width: 750px;
//   }
//   @media only screen and (max-width: 1200px) {
//     video {
//       height: 590px;
//       width: 700px;
//     }
//   }

//   @media only screen and (max-width: 1000px) {
//     video {
//       height: 500px;
//       width: 600px;
//     }
//   }

//   @media only screen and (max-width: 900px) {
//     video {
//       height: 400px;
//       width: 500px;
//     }
//   }
//   @media only screen and (max-width: 500px) {
//     video {
//       height: 330px;
//       width: 400px;
//     }
//   }

//   @media only screen and (max-width: 420px) {
//     video {
//       height: 300px;
//       width: 350px;
//     }
//   }


// `;

const CuboGif = () => {
  return (
    <Video loop autoPlay muted>
      <source src="cube-black-min.mp4" type="video/mp4" />
    </Video>
  );
};

const Video = styled.video`
  height: 620px;
  width: 750px;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1000;
`;

export default CuboGif;
