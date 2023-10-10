import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import Tabs from "../components/Tabs";

const Navbar = () => {
  const [width, setWidth] = useState(null);
  const getWidth = () => divRef?.current?.offsetWidth;
  const medium = 845;
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
    <>
      {totalWidth < medium ? (
        <>
          <NavbarSectionMobile>
            <div className="logomobile">
              <img alt="logo" src={logo} />
            </div>
            <NavbarContainerMobile>
              <Tabs />
            </NavbarContainerMobile>
          </NavbarSectionMobile>
        </>
      ) : (
        <>
          <NavbarSection>
            <NavbarContainer>
              <div className="logo">
                <img alt="logo" src={logo} />
              </div>
              <Tabs />
            </NavbarContainer>
          </NavbarSection>
        </>
      )}
    </>
  );
};

const NavbarSection = styled.section`
  z-index: 200;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 20px 80px;
  margin: auto;
  color: white;

  img {
    height: 40px;
    width: 40px;
  }
`;

const NavbarContainer = styled.div`
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  position: relative;


  .logo {
    position: absolute;
    left: 0;
  }

  img {
    height: 40px;
    width: 40px;
  }
`;

const NavbarSectionMobile = styled.section`
  z-index: 200;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  color: white;
  flex-direction: column;
  justify-content: center !important;
  align-items: center;
  
  .logomobile {
    display: flex;
    justify-content: center;
    border-bottom: 1px solid white;
    padding: 40px 0px;
  }

  img {
    height: 40px;
    width: 40px;
  }
`;

const NavbarContainerMobile = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0px;

`;

export default Navbar;
