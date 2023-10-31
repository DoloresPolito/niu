import React from "react";
import styled from "styled-components";
import up from "../assets/faqs/up.png";
import down from "../assets/faqs/down.png";

export const AccordionItem = ({
  handleToggle,
  active,
  header,
  id,
  content,
}) => {
  return (
    <Card>
      <Header onClick={() => handleToggle(id)}>
        {header}

        <img src={active === id ? up : down} alt="+" />
      </Header>
      <Content className={active === id ? "show" : ""}>{content}</Content>
    </Card>
  );
};

const Card = styled.div`
  background: white;
  border-radius: 25px;
  margin-bottom: 32px;
  padding: 10px 30px;
  overflow: hidden;
  border: none;

  box-shadow: 0 0 8px rgba(0, 0, 0, 0.03), 0 0 8px rgba(0, 0, 0, 0.03),
    0 0 8px rgba(0, 0, 0, 0.03), 0 0 8px rgba(0, 0, 0, 0.03);
  &:last-child {
    margin-bottom: 0;
  }
  th {
    padding-top: 24px;
    padding-bottom: 24px;
  }
`;

const Header = styled.div`
  img {
    height: 6px;
  }

  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  transition: 0.3s;
  height: 60px;
  font-family: "Roboto", sans-serif;
  color: #000;
  font-style: normal;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px;


  @media only screen and (max-width: 800px) {
      font-size: 18px;
      font-weight: 500;
      line-height: 29px; 
      padding: 2px;
    }

    @media only screen and (max-width: 665px) {
      font-size: 15px;
      font-weight: 500;
      line-height: 23px; 
    }

    @media only screen and (max-width: 540px) {

    }
`;

const Content = styled.div`
  position: relative;
  height: 0;
  overflow: hidden;
  transition: height 0.35s ease;
  font-family: "Roboto", sans-serif;
  font-weight: 300;



  &.show {
    height: auto;
    padding-bottom: 20px;
    line-height: 22px;
    padding: 15px;
  background-color: yellow;
  }
`;

export default AccordionItem;
