import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const Footer = () => {
  const [width, setWidth] = useState(null);
  const getWidth = () => divRef?.current?.offsetWidth;
  const medium = 700;
  const divRef = useRef(null);

  const [totalWidth, setTotalWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setTotalWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(getWidth());
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <FooterWrapper>
      <FooterContainer>
        {totalWidth < medium ? (
          <>
            <Row>
              <Column>niu</Column>
            </Row>
            <Row>
              <Column>
                {" "}
                <div>
                  <p className="column5">graficos</p>
                </div>
                {/* <p className="column5">Cabildo Av. 3062 Piso:3 Dpto:A</p> */}
              </Column>
            </Row>
            <Row>
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
            </Row>
          </>
        ) : (
          <>
            <Row>
              <Column>niu</Column>
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
              <Column>
                <div>
                  <p>graficos</p>
                </div>
                <p>Cabildo Av. 3062 Piso:3 Dpto:A</p>
              </Column>
            </Row>
          </>
        )}
      </FooterContainer>
    </FooterWrapper>
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
  flex-direction: column;
  width: 90%;
  padding: 20px;
  height: 100%;

  p{
    font-size: 12px;
    text-align: left;
  }

  .column5{
    font-size: 12px;
    text-align: center;
  }

  button{
    background-color: orange;
    height: 60px;
    border:none;
    margin-top: 20px;
    border-radius: 5px;
    width: 90%;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const Column = styled.div`
  flex: 1;
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export default Footer;
