import React, { useEffect } from "react";
import styled from "styled-components";
import { Button } from "../styles/texts";

import mobilephone from "../assets/home/homecover/mobile-phone.svg";

const CoverMobile = () => {
  return (
    <>
      <CoverMobileSection>
        <CoverMobileContainer>
          <div className="topcontainer">
            <h1>
              tu billetera a <br /> <b>otro level.</b>
            </h1>
            <p>
              Pesos & Crypto <br />
              <b>
                {" "}
                Manejá tus finanzas <br /> con n1u
              </b>
            </p>
          </div>
          <div className="phonecontainer">
            <img src={mobilephone} alt="mobilephone" />
          </div>
          <div className="bottomcontainer">
            <p>
              Hecha por y para gamers <br />
              <b>Cumplí misiones y ganá con n1u</b>
            </p>
            <h3>Unite al n1uverse</h3>
          </div>
          <Button>
            <p>descargá la app</p>
          </Button>
        </CoverMobileContainer>
      </CoverMobileSection>
    </>
  );
};

const CoverMobileSection = styled.div`
  width: 100%;
  height: auto;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* background: linear-gradient(217deg, black, #ff009c 90.71%); */
`;

const CoverMobileContainer = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 180px;
  margin-bottom: 80px;
  .phonecontainer {
    img {
      width: 400px;
    }
  }
  .topcontainer {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-around;

    h1 {
      color: white;
      font-family: "Roboto", sans-serif;
      font-size: 34px;
      font-style: normal;
      font-weight: 800;
      line-height: 34px;
      letter-spacing: 0.5px;
      max-width: 450px;

      b {
        font-family: "Pixelify Sans", sans-serif;
      }
    }

    p {
      color: #e8e9ee;
      font-family: "Roboto", sans-serif;
      font-size: 15px;
      font-style: normal;
      font-weight: 300;
      line-height: 15px;
      letter-spacing: 0.5px;
      text-align: right;

      b {
        font-weight: 700;
      }
    }
  }

  .bottomcontainer {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    margin-top: -20px;

    p {
      color: #e8e9ee;
      font-family: "Roboto", sans-serif;
      font-size: 15px;
      font-style: normal;
      font-weight: 300;
      line-height: 18px;
      letter-spacing: 0.5px;
      text-align: left;
      max-width: 120px;
      margin-top: -50px;

      b {
        font-weight: 700;
      }
    }

    h3 {
      color: yellow;
      font-family: "Roboto", sans-serif;
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: 22px;
      text-align: right;
      max-width: 100px;
    }
  }
`;

export default CoverMobile;
