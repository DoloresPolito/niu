import React from "react";
import styled from "styled-components";
import up from "../assets/arrow-up.svg";
import down from "../assets/arrow-down.svg";

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
  padding: 0 30px;
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
    height: 32px;
    margin: 17px 0px;
  }

  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  transition: 0.3s;
  height: 80px;
`;

const Content = styled.div`
  position: relative;
  height: 0;
  overflow: hidden;
  transition: height 0.35s ease;

  &.show {
    height: auto;
    padding-bottom: 20px;
    line-height: 22px;
  }
`;

export default AccordionItem;
