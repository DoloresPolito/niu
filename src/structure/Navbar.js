import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import logowhite from "../assets/logon1u/logo white.svg";
import logoblack from "../assets/logon1u/logo black.svg";
import Tabs from "../components/Tabs";
import Hamburger from "hamburger-react";
import Menu from "../components/Menu";
import { Link } from "react-router-dom";

const Navbar = ({ view }) => {
  const [width, setWidth] = useState(null);
  const [isOpen, setOpen] = useState(false);
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

  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <>
        <NavbarSection fixed={fixed}>
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
            {totalWidth < medium ? (
              <>
                <Hamburger toggled={isOpen} toggle={setOpen} />

                <Menu open={isOpen} />
              </>
            ) : (
              <>
                <Tabs view={view} />
              </>
            )}
          </NavbarContainer>
        </NavbarSection>
      </>
    </>
  );
};

const NavbarSection = styled.section`
  z-index: 200;
  position: ${(props) => (props.fixed ? "fixed" : "absolute")};
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 20px 70px;
  margin: auto;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;

  background-color: ${(props) => (props.fixed ? "black" : "transparent")};
  transition: position 0.5s ease-in-out;

  .hamburger-react {
    position: relative;
    z-index: 6000;
    color: white;
  }

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
  max-width: 1600px;
  width: 90%;

  .logo {
    position: absolute;
    left: 0%;
    margin-top: -17px;
  }
`;

export default Navbar;
