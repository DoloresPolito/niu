import React from "react";
import styled from "styled-components";
import Loop from "./Loop";
import microsoft from "../assets/home/customers/Microsoft.png";
import tapi from "../assets/home/customers/Tapi.png";
import playstation from "../assets/home/customers/Playstation.png";
import gamersclub from "../assets/home/customers/Gamersclub.png";
import crackthecode from "../assets/home/customers/Crack the code.png";


const Customers = () => {
 
  return (
    <CustomersSection>
      <CustomersContainer>
        <Loop
          reverse={true}
          content={
            <>
              <img src={microsoft} alt="microsoft" width={120} height={30} />
              <img src={tapi} alt="tapi" width={80} height={40} />
              <img
                src={playstation}
                alt="playstation"
                width={120}
                height={40}
              />
              <img src={gamersclub} alt="gamersclub" width={150} height={30} />
              <img
                src={crackthecode}
                alt="crackthecode"
                width={150}
                height={15}
              />
            </>
          }
        />
      </CustomersContainer>
    </CustomersSection>
  );
};

const CustomersSection = styled.div`
  height: auto;
  width: 100%;
  margin: auto;
  background: black;
  padding: 40px 80px;
  overflow: hidden;
  z-index: 30;
  box-sizing: border-box;
`;

const CustomersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: auto;

  @media only screen and (max-width: 850px) {
    flex-direction: column;
  }
  img {
    padding: 0 70px;
  }
`;

export default Customers;
