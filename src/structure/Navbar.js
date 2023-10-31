import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import logowhite from "../assets/logon1u/logo white.svg";
import logoblack from "../assets/logon1u/logo black.svg";
import Tabs from "../components/Tabs";
import { Link } from "react-router-dom";

const Navbar = ({ view }) => {
  const [width, setWidth] = useState(null);
  const getWidth = () => divRef?.current?.offsetWidth;
  const medium = 900;
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
          <Link to="/" className="link">
            <div className="logomobile">
              {view === "benefit" ? (
                <>
                  {" "}
                  <img alt="logoblack" src={logoblack} />
                </>
              ) : (
                <>
                  <img alt="logo" src={logowhite} />
                </>
              )}
            </div>
            </Link>
            <NavbarContainerMobile>
              <Tabs view={view}/>
            </NavbarContainerMobile>
          </NavbarSectionMobile>
        </>
      ) : (
        <>
          <NavbarSection >
            <NavbarContainer>
            <Link to="/" className="link">
              <div className="logo">
              {view === "benefit" ? (
                <>
                  {" "}
                  <img alt="logoblack" src={logoblack} />
                </>
              ) : (
                <>
                  <img alt="logo" src={logowhite} />
                </>
              )}
            
              </div>
              </Link>
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
  padding: 20px 70px;
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
  justify-content: flex-end;
  position: relative;



  .logo {
    position: absolute;
    left: 0%;
    margin-top: -25px;

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
    padding: 30px 0px;
  }

  img {
    max-width: 70px;
    height: auto;
  }
`;

const NavbarContainerMobile = styled.div`
  display: flex;
  justify-content: center;
`;

export default Navbar;
