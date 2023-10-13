import React from "react";
import styled from "styled-components";
import clarin from "../assets/home/sponsors/Clarin.png";
import cronista from "../assets/home/sponsors/cronista.png";
import forbes from "../assets/home/sponsors/Forbes.png";
import iproup from "../assets/home/sponsors/iproup.png";

const Sponsors = () => {
  return (
    <>
      <SponsorsSection>
        <SponsorsContainer>
          <div>
            <img src={clarin} alt="clarin" />
          </div>
          <div>
            <img src={cronista} alt="cronista" />
          </div>

          <div>
            <img src={forbes} alt="forbes" />
          </div>
          <div>
            <img src={iproup} alt="iproup" />
          </div>
        </SponsorsContainer>
      </SponsorsSection>
    </>
  );
};

const SponsorsSection = styled.div`
  height: auto;
  width: 100%;
  margin: auto;
  background: #cebdf2;
`;

const SponsorsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  height: auto;
  width: 90%;
  margin: 0 auto;

  div {
    border: 1px solid black;
    border-radius: 15px;
    height: 130px;
    width: 250px;
    margin: 30px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    height: 40px;
    width: 100px;
  }
`;

export default Sponsors;
