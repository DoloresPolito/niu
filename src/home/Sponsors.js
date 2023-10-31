import React from "react";
import styled from "styled-components";
import clarin from "../assets/home/homesponsors/clarin.svg";
import cronista from "../assets/home/homesponsors/el-cronista.svg";
import forbes from "../assets/home/homesponsors/forbes.svg";
import iproup from "../assets/home/homesponsors/ipro-up.svg";
import { Link } from "react-router-dom";

const Sponsors = () => {
  return (
    <>
      <SponsorsSection>
          <SponsorsContainer>
        
            <Link to="https://www.forbesargentina.com/" target="_blank">
               <SponsorItem>
                <img src={forbes} alt="forbes" />
              </SponsorItem>
            </Link>
            <Link to="https://www.clarin.com/" target="_blank">
              <SponsorItem>
                <img src={clarin} alt="clarin" />
              </SponsorItem>
            </Link>
            <Link to="https://www.iproup.com/" target="_blank">
              <SponsorItem>
                <img src={iproup} alt="iproup" />
              </SponsorItem>
            </Link>
            <Link to="https://www.cronista.com/" target="_blank">
              <SponsorItem className="cronista">
                <img
                  src={cronista}
                  alt="el-cronista"
                  style={{ width: "250px" }}
                />
              </SponsorItem>
            </Link>
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
  display: flex;
  justify-content: center;
`;

const SponsorsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: auto;
  min-width: 95%;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;

  @media only screen and (max-width: 800px) {
    flex-direction: column !important;
    justify-content: center;
  }
`;

const SponsorItem = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s, box-shadow 0.3s;
  cursor: pointer;
  height: 160px;
  width: 280px;

  img {
    height: 60px;
    width: 180px;
  }

  &:hover {
    background-color: #FF009C;
  
  }

  @media only screen and (max-width: 1300px) {
    height: 160px;
    width: 240px;
    img {
      height: 50px;
      width: 150px;
    }

  }

  @media only screen and (max-width: 1100px) {
    height: 140px;
    width: 210px;
  }

  @media only screen and (max-width: 930px) {
    height: 130px;
    width: 200px;
    img {
      height: 40px;
      width: 140px;
    }
  }

  @media only screen and (max-width: 800px) {
    border: 0px solid #cebdf2;
    height: auto;
    margin: 30px 0px;

    img {
      height: 50px;
      width: 150px;
    }
    &:hover {
      background-color: #cebdf2;
    }
  }
`;

export default Sponsors;
