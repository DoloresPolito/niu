import React from "react";
import styled from "styled-components";
import microsoft from "../assets/n1uverse/customers/microsoft.svg";
import tapi from "../assets/n1uverse/customers/tapi.svg";
import playstation from "../assets/n1uverse/customers/playstation.svg";
import gamersclub from "../assets/n1uverse/customers/gamersclub.svg";
import crackthecode from "../assets/n1uverse/customers/crack.svg";

const CustomersN1uverse = () => {
  return (
    <>
      <CustomersSection>
        <CustomersContainer>
          <img src={microsoft} alt="microsoft" 
          />
          <img src={tapi} alt="tapi" 
          />
          <img src={playstation} alt="playstation" 
          />
          <img src={gamersclub} alt="gamersclub" 
           />
          <img src={crackthecode} alt="crackthecode" 
          />
        </CustomersContainer>
      </CustomersSection>
    </>
  );
};

const CustomersSection = styled.div`
  height: auto;
  width: 100%;
  padding: 40px 0px;
  background-color: #cebdf2;
  display: flex;
  justify-content: center;
`;

const CustomersContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: auto;

  

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }

  img{
    padding: 30px 0px;
    height: 40px;
    width: 150px;
  }
`;

export default CustomersN1uverse;
