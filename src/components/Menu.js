import React from "react";
import styled from "styled-components";
import Tabs from "./Tabs";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Tabs />
    </StyledMenu>
  );
};

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #ff009c;
  height: 100vh;
  text-align: left;
  padding: 0px 100px 30px 30px;
  position: fixed;
  z-index: 5000;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

  @media only screen and (max-width: 900px) {
    justify-content: center;
  }
`;

export default Menu;
