import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../structure/Navbar";
import Footer from "../structure/Footer";
import { Container, Heading1 } from "../styles/texts";
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
        <Container>
          <QuestionsContainer>
            <Box>
              <h2>Sobre niu</h2>
              <p>
                n1u es una super app que llegó para solucionar todas tus
                finanzas. Podés contar con una tarjeta Visa internacional
                prepaga, para comprar en cualquier comercio y sitio web del
                mundo que acepte Visa. Además, podés enviar y recibir, plata
                a/de otros usuarios de n1u, cuentas bancarias (CBU) y cuentas
                virtuales (CVU) gratis e instantáneamente. Además, podes extraer
                dinero de los cajeros de las redes habilitadas (Red Link,
                Banelco o si estás fuera de Argentina VISA Plus), También
                comprar y vender activos digitales, comprar juegos, recargar y
                pagar servicios, celular, transporte y SUBE. Además la app te
                ayuda a proteger tus gastos, ya que recibís una notificación en
                el momento que realices un consumo y seguir todos tus
                movimientos cuando y desde donde quieras.
              </p>

              {questions1.map((question) => (
                <AccordionItem
                  key={question.id}
                  active={active}
                  handleToggle={() => handleToggle(question.id)}
                  id={question.id}
                  header={question.title}
                  content={question.content}
                />
              ))}

              <h2>Usuario y Cuenta</h2>

              {questions2.map((question) => (
                <AccordionItem
                  key={question.id}
                  active={active}
                  handleToggle={() => handleToggle(question.id)}
                  id={question.id}
                  header={question.title}
                  content={question.content}
                />
              ))}
            </Box>
          </QuestionsContainer>
        </Container>
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
  background: linear-gradient(
    217deg,
    #f24be7,
    #f213a4 -40.71%,
    #483c73 90%,
    #ac99f2
  );
`;

const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: white;
  min-height: 100vh;
`;

const Box = styled.div`
  background-color: white;
  height: auto;
  margin: 80px 0px;
  width: 90%;

  h2 {
    color: #e30052;
    padding-bottom: 20px;
    font-family: "Pixelify Sans", sans-serif;
  }

  p {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    padding-bottom: 30px;
    line-height: 22px;
  }
`;

export default Faqs;
