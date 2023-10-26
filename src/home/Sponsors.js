import React from "react";
import styled from "styled-components";
import clarin from "../assets/home/homesponsors/clarin.svg";
import cronista from "../assets/home/homesponsors/el-cronista.svg";
import forbes from "../assets/home/homesponsors/forbes.svg";
import iproup from "../assets/home/homesponsors/ipro-up.svg";
import AnimatedText from "../components/AnimatedText";

const Sponsors = () => {
  return (
    <>
      <SponsorsSection>
        <AnimatedText>
          <SponsorsContainer>
            <SponsorItem>
              <img src={forbes} alt="forbes" />
            </SponsorItem>
            <SponsorItem>
              <img src={clarin} alt="clarin" />
            </SponsorItem>
            <SponsorItem>
              <img src={iproup} alt="iproup" />
            </SponsorItem>
            <SponsorItem className="cronista">
              <img src={cronista} alt="el-cronista" style={{ width: "250px" }} />
            </SponsorItem>
          </SponsorsContainer>
        </AnimatedText>
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
  justify-content: center;
  height: auto;
  width: 95%;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const SponsorItem = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  height: 154px;
  width: 335px;
  margin: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s, box-shadow 0.3s;
  cursor: pointer;

  img {
    height: 60px;
    width: 180px;
  }

  &:hover {
    background-color: #ff009c; 
    box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 1);  
  }

  @media only screen and (max-width: 1140px) {
    height: 134px;
    width: 300px;
    margin: 1%;

    img {
      height: 60px;
      width: 150px;
    }
  }

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    padding: 70px 0;

    border: 0px solid #cebdf2;
    height: auto;
    margin: 10px 0px;

    img {
      height: 50px;
      width: 150px;
    }
  
}
`


export default Sponsors;
