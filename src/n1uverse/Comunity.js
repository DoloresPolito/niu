import React from "react";
import styled from "styled-components";
import phone from "../assets/home/cover/Celu Mockup.png";
import rayones from "../assets/n1uverse/n1uverseicons/Rayones.png";
import rayonesdos from "../assets/n1uverse/n1uverseicons/n1u.png";
import rayo1 from "../assets/n1uverse/n1uverseicons/Rayo 1.png";
import rayo2 from "../assets/n1uverse/n1uverseicons/Rayo  2.png";
import rayo3 from "../assets/n1uverse/n1uverseicons/Rayo 3.png";
import rayo4 from "../assets/n1uverse/n1uverseicons/Rayo 4.png";

function Comunity() {
  return (
    <>
      <ComunitySection>
        <Rayo1 src={rayo1} alt="rayo1" />
        <Rayo2 src={rayo2} alt="rayo2" />
        <Rayo3 src={rayo3} alt="rayo3" />
        <Rayo4 src={rayo4} alt="rayo4" />
        <SectionContainer>
          <BackgroundImage src={rayones} alt="rayonesfondo" />
          <BackgroundImage2 src={rayonesdos} alt="rayonesfondo" />
          <TextDiv>
          <h1>Unite a n1u y </h1>
              <h1>formá parte de una</h1>
              <h2>comunidad a</h2>
              <h2 className="bottom">otro level</h2>
          </TextDiv>
          <ContentContainer>
            <ImageContainer>
              <InnerImage src={phone} alt="phone" />
            </ImageContainer>
            <TextDiv />
            {/* <TextWrap>
             
            </TextWrap> */}
          </ContentContainer>
        </SectionContainer>
      </ComunitySection>
    </>
  );
}

const ComunitySection = styled.div`
  width: 100%;
  height: auto;
`;

const SectionContainer = styled.div`
  position: relative;
  width: 80%;
  height: 700px;
  overflow: hidden;
  margin: 0 auto;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  max-height: 100%;
`;
const BackgroundImage2 = styled.img`
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  max-height: 100%;
`;

const ContentContainer = styled.div`
  position: relative;
  /* z-index: 2; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

// const TextWrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 300px;
//   align-items: flex-end;
//   position: absolute;
//   left: 350px;

//   h1 {
//     font-size: 50px;
//     line-height: 0px;
//     color: #fff;
//   }

//   h2 {
//     font-size: 60px;
//     color: #fff;
//     margin-right: 20px;
//     background-color: #ff009c;
//     text-align: right;
//     width: 700px;
//     margin-bottom: 5px;
//     font-family: "Pixelify Sans", sans-serif;
//   }

//   .bottom {
//     margin-top: 0px;
//   }
// `;

const ImageContainer = styled.div`
  display: inline-block;
  margin-right: 20px;
  margin-left: 0px;
  width: 700px;
  z-index: 10;
`;

const InnerImage = styled.img`
  max-width: 70%;
  max-height: 70%;
`;

const Rayo1 = styled.img`
  position: absolute;
  top: 180%;
  right: 0%;
  height: 50%;
`;

const Rayo4 = styled.img`
  position: absolute;
  top: 80%;
  right: 0%;
  height: 50%;
`;

const Rayo2 = styled.img`
  position: absolute;
  top: 180%;
  left: 0%;
  height: 50%;
`;

const Rayo3 = styled.img`
  position: absolute;
  top: 80%;
  left: -5%;
  height: 50%;
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  height: 350px;
  width: 700px;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
 


  h1 {
    font-size: 50px;
    line-height: 0px;
    color: #fff;
 

  }

  h2 {
    font-size: 60px;
    color: #fff;
    margin-right: 20px;
    background-color: #ff009c;
    text-align: right;
    width: 700px;
    margin-bottom: 5px;
    font-family: "Pixelify Sans", sans-serif;
  }

  .bottom {
    margin-top: 0px;
  }
`;
export default Comunity;
