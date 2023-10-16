import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import logoblack from "../assets/logo black.png";
import Tabs from "../components/Tabs";

const Navbar = ({ view }) => {
  console.log("view en navbar", view);
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
          <NavbarSectionMobile view={view}>
            <div className="logomobile">
              {view === "benefit" ? (
                <>
                  {" "}
                  <img alt="logoblack" src={logoblack} />
                </>
              ) : (
                <>
                  <img alt="logo" src={logo} />
                </>
              )}
            </div>
            <NavbarContainerMobile>
              <Tabs view={view}/>
            </NavbarContainerMobile>
          </NavbarSectionMobile>
        </>
      ) : (
        <>
          <NavbarSection >
            <NavbarContainer>
              <div className="logo">
              {view === "benefit" ? (
                <>
                  {" "}
                  <img alt="logoblack" src={logoblack} />
                </>
              ) : (
                <>
                  <img alt="logo" src={logo} />
                </>
              )}
            
              </div>
              <Tabs view={view}/>
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



  img {
    max-width: 70px;
    height: auto;
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
`;

const NavbarSectionMobile = styled.section`
  z-index: 200;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center !important;
  align-items: center;


  .logomobile {
    display: flex;
    justify-content: center;
    border-bottom: ${(props) => props.view === "benefit" ? "1px solid black" : "1px solid white"};
    padding: 40px 0px;
  }

  img {
    max-width: 70px;
    height: auto;
  }
`;

const NavbarContainerMobile = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0px;
`;

export default Navbar;
