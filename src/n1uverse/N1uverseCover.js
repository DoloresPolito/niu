import React from "react";
import styled from "styled-components";

import image from "../assets/n1uverse/cover/Foto n1uverse.png";
import title from "../assets/n1uverse/cover/Led n1uverse copia.png";

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
`;

const NiuverseContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: auto;
  margin: 0 auto;
`;

const NiuniverseContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;

  .text {
    color: white;
    max-width: 500px;
  }

  .image {
    img {
      height: 300px;
    }
  }
`;

export default N1uverseCover;
