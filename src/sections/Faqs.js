import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../structure/Navbar";
import Footer from "../structure/Footer";
import { Heading1 } from "../styles/texts";
import AccordionItem from "../components/AccordionItem";
import questions1 from "../jsons/questions1.json";
import questions2 from "../jsons/questions2.json";

function Faqs() {
  const [active, setActive] = useState("");

  const handleToggle = (id) => {
    setActive((prevActive) => (prevActive === id ? null : id));
  };
  return (
    <>
      <QuestionsSection>
        <Navbar />
        <Cover>
          <Heading1>faqs</Heading1>
        </Cover>

        <QuestionsContainer>
          <Box>
            <h2>Sobre niu</h2>
            <p>
              n1u es una super app que llegó para solucionar todas tus finanzas.
              Podés contar con una tarjeta Visa internacional prepaga, para
              comprar en cualquier comercio y sitio web del mundo que acepte
              Visa. Además, podés enviar y recibir, plata a/de otros usuarios de
              n1u, cuentas bancarias (CBU) y cuentas virtuales (CVU) gratis e
              instantáneamente. Además, podes extraer dinero de los cajeros de
              las redes habilitadas (Red Link, Banelco o si estás fuera de
              Argentina VISA Plus), También comprar y vender activos digitales,
              comprar juegos, recargar y pagar servicios, celular, transporte y
              SUBE. Además la app te ayuda a proteger tus gastos, ya que recibís
              una notificación en el momento que realices un consumo y seguir
              todos tus movimientos cuando y desde donde quieras.
            </p>

            {questions1.map((question, index) => (
              <AccordionItem
                key={index}
                active={active}
                handleToggle={() => handleToggle(question.id)}
                id={question.id}
                header={question.title}
                content={question.content}
              />
            ))}

            <h2>Usuario y Cuenta</h2>

            {questions2.map((question, index) => (
              <AccordionItem
                key={index}
                active={active}
                handleToggle={() => handleToggle(question.id)}
                id={question.id}
                header={question.title}
                content={question.content}
              />
            ))}
          </Box>
        </QuestionsContainer>

        <Footer />
      </QuestionsSection>
    </>
  );
}

const QuestionsSection = styled.div`
  height: auto;
  width: 100%;
  margin: auto;
  background-color: white;
`;

const Cover = styled.div`
  height: 100vh;
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: linear-gradient(
    217deg,
    #f24be7,
    #f213a4 -40.71%,
    #483c73 90%,
    #ac99f2
  ); */

  background-image: url("/backgrounds/background-coverfaqs.svg");
  background-size: cover;
  background-position: center;
`;

const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  background-color: white;
  margin: 0 auto;
  min-height: 100vh;


  @media only screen and (max-width: 800px) {
    width: 80%;
  }
`;

const Box = styled.div`
  background-color: white;
  height: auto;
  margin: 80px 0px;
  width: 100%;


  h2 {
    padding-bottom: 20px;
    font-family: "Pixelify Sans", sans-serif;
    color: #ff009c;
    /* font-family: LoRes 9 OT; */
    font-size: 28.125px;
    font-style: normal;
    font-weight: 400;
    line-height: 37.5px;

    @media only screen and (max-width: 800px) {
      font-size: 28.125px;
      font-style: normal;
      font-weight: 400;
      line-height: 37.5px; 


    }
  }

  p {
    padding-bottom: 30px;
    color: #000;
    font-family: "Roboto", sans-serif;
    font-size: 25px;
    font-style: normal;
    font-weight: 300;
    line-height: 31.25px; 
    @media only screen and (max-width: 800px) {
      font-size: 19px;
      line-height: 40px; 
    }
  }
`;

export default Faqs;
