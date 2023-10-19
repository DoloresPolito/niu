import React from "react";
import styled from "styled-components";

import image from "../assets/n1uverse/cover/aliens.svg";
import title from "../assets/n1uverse/cover/n1uversetitle.svg";

const N1uverseCover = () => {
  return (
    <>
      <N1uverseSection>
        <NiuverseContainer>
          <img src={title} alt="title" />
          <NiuniverseContent>
            <div className="text">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div className="image">
              <img src={image} alt="n1uverse" />
            </div>
          </NiuniverseContent>
        </NiuverseContainer>
      </N1uverseSection>
    </>
  );
};

const N1uverseSection = styled.div`
  width: 100%;
  height: auto;
  padding-top: 50px;
  @media only screen and (max-width: 1200px) {
    padding-top: 100px;
  }
  @media only screen and (max-width: 900px) {
    padding-top: 150px;
  }
`;

const NiuverseContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: auto;
  margin: 0 auto;

  @media only screen and (max-width: 900px) {
    width: 90%;
  }
`;

const NiuniverseContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;


  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }

  .text {
    color: white;
    max-width: 500px;
    @media only screen and (max-width: 1200px) {
      max-width: 100%;
    }
  }

  .image {
 
    img {
      width: 100%;
      @media only screen and (max-width: 900px) {
        width: 100%;
      }

    }
  }
`;

export default N1uverseCover;
