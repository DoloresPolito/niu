import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import SocialMedia from "../components/SocialMedia";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <Column>  <img alt="logo" src={logo} /></Column>

        <MiddleColumn />

        <Column>
          <div className="social-media">
           <SocialMedia/>
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
          <button></button>
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
`;

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  width: 90%;
  padding: 20px;
  height: 100%;
  justify-content: space-between;

  img{
    max-width: 70px;
    height: auto;

  }

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }

  p {
    font-size: 12px;
    text-align: left;
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
`;

const MiddleColumnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media only screen and (max-width: 900px) {
    &:nth-child(2) {
      order: 3;
    }
  }
`;

export default Footer;
