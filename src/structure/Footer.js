import React from "react";
import styled from "styled-components";
import logowhite from "../assets/logon1u/logo white.svg";
import SocialMedia from "../components/SocialMedia";
import orange from "../assets/footer/orange-button.svg";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <Column>
          {" "}
          <img className="logo" alt="logo" src={logowhite} />
        </Column>

        <MiddleColumn />

        <Column>
          <div className="social-media">
            <SocialMedia view="footer"/>
          </div>
          <p className="address">Cabildo Av. 3062 Piso:3 Dpto:A</p>
        </Column>
      </FooterContainer>
    </FooterWrapper>
  );
};

const MiddleColumn = () => {
  return (
    <>
      <MiddleColumnContainer>
        <Column>
          <p>TyC generales del servicio</p>
          <p>TyC activos digitales</p>
          <p>TyC n1u pass</p>
          <p>Politicas de privacidad</p>
          <p>Politicas de privacidad activos digitales</p>
          <p>Terminos y CondicionesPromocion Visa & Pedidos Ya</p>
        </Column>
        <Column>
          <p>Tarjeta Prepaga</p>
          <p>Actividades Prohibidas</p>
          <p>FAQs</p>
          <p>FAQ n1u pass</p>
          <p>Defensa al consumidor</p>
        </Column>
        <Column>
          <p>Costos y Comisiones</p>
          <p>Información al usuario financiero</p>
          <img className="orange-button" src={orange} alt="button" />
          <p className="address-mobile">Cabildo Av. 3062 Piso:3 Dpto:A</p>
        </Column>
      </MiddleColumnContainer>
    </>
  );
};

const FooterWrapper = styled.footer`
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 445px;

  @media only screen and (max-width: 900px) {
    height: 500px;
  }
`;

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  width: 80%;
  padding: 20px;
  height: auto;
  justify-content: space-between;

  @media only screen and (max-width: 900px) {
    padding: 10px;
    width: 90%;
  }

  .orange-button {
    padding-top: 20px;
    width: 90%;

  }

  .logo {
    max-width: 70px;
    height: auto;
    padding-right: 40px;
  }

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }

  p {
    text-align: left;
    color: #fff;
    font-family: "Roboto", sans-serif;
    font-size: 12.5px;
    font-style: normal;
    font-weight: 400;
    line-height: 15.625px;


  }

  button {
    background-color: orange;
    height: 60px;
    border: none;
    margin-top: 20px;
    border-radius: 5px;
    width: 90%;
  }
`;

const Column = styled.div`
  flex: 1;
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;

  .address-mobile {
    display: none;
    @media only screen and (max-width: 900px) {
      display: flex;
      font-size:10px;
    }

  }

  .address {
    padding-top: 50px;
  }

  .social-media {
    @media only screen and (max-width: 900px) {
      margin: 0 auto;
    }
  }
  .address {
    @media only screen and (max-width: 900px) {
      display: none;
    }
  }

  p {
    margin-bottom: 5px;
  }
`;

const MiddleColumnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: 900px) {
    width: 100%;
    &:nth-child(2) {
      order: 3;
    }
  }

  > ${Column} {
    margin-right: 10px;
  }
`;

export default Footer;
