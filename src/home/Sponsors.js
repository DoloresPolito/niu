import React from "react";
import styled from "styled-components";
import clarin from "../assets/home/homesponsors/clarin.svg";
import cronista from "../assets/home/homesponsors/el-cronista.svg";
import forbes from "../assets/home/homesponsors/forbes.svg";
import iproup from "../assets/home/homesponsors/ipro-up.svg";

const Sponsors = () => {
  return (
    <>
      <SponsorsSection>
        <SponsorsContainer>
          <div>
            <img src={clarin} alt="clarin" />
          </div>
          <div>
            <img className="cronista" src={cronista} alt="cronista" style={{width:"250px"}}/>
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
  justify-content: center;
  height: auto;
  width: 95%;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;

  div {
    border: 1px solid black;
    border-radius: 15px;
    height: 154px;
    width: 335px;
    margin: 1%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    height: 60px;
    width: 180px;
  }

  @media only screen and (max-width: 1140px) {
    div {
      height: 134px;
      width: 300px;
      margin: 1%;
    }

    img {
      height: 60px;
      width: 150px;
    }
  }

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    padding: 10px 0;

    div {
      border: 0px solid #cebdf2;
      margin: 10px 0px;
    }

    img {
      height: 50px;
      width: 150px;
    }

    .cronista{
      width: 250px;
      height: 300px;
    }
  }
`;

export default Sponsors;
