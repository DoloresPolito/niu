import styled from "styled-components";

export const Heading1 = styled.h1`
  font-family: "Roboto", sans-serif;
  color: #fff;
  text-align: center;
  font-size: 218.75px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-top: 40px;



  @media only screen and (max-width: 845px) {
    font-size: 190px;
    line-height: 220px;
  }

 @media only screen and (max-width: 570px) {
    font-size: 120px;
    line-height: 0px;
  }
  
  @media only screen and (max-width: 440px) {
    font-size: 75px;
  }
`;

export const Heading2 = styled.h2`
  margin-top: -170px;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 47.5px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  b {
    font-weight: 900;
  }

  @media only screen and (max-width: 845px) {
    font-size: 35px;
    line-height: 75px;
  }

  @media only screen and (max-width: 570px) {
    max-width: 170px;
    line-height: 20px;
    font-size: 20px;
    margin-top: 0px;
  }
`;

export const Heading3 = styled(Heading1)`
  font-size: 20px;
  line-height: 32px;
`;

export const LargeText = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 1px;
`;
export const StandardText = styled(LargeText)`
  font-size: 16px;
  line-height: 22px;
`;

export const SmallText = styled(LargeText)`
  font-size: 14px;
  line-height: 20px;
`;

export const Button = styled.button`
  background-color: #ff009c;
  width: auto;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  width: 260px;
  height: 50.625px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: #fff;
    font-family: "Roboto", sans-serif;
    font-size: 25px;
    font-style: normal;
    font-weight: 300;
    line-height: 50px;
  }
`;

export const CardTitle = styled.h2`
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.75px;

  @media only screen and (max-width: 400px) {
    font-size: 18px;
  }
`;

export const CardText = styled.h2`
  text-decoration: none;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  letter-spacing: -0.337px;




  @media only screen and (max-width: 400px) {
    font-size: 10px;
  }
`;
export const CardLink = styled.p`
  display: flex;
  justify-content: flex-end;
  text-decoration: none;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 15.625px;
  font-style: normal;
  font-weight: 500;
  position:absolute;
  right: 10%;
  bottom:0%;

  @media only screen and (max-width: 400px) {
    font-size: 10px;
    bottom:5%;
  }

  /* 
  @media only screen and (max-width: 850px) {
    font-size: 14px;
    line-height: 28px;
    letter-spacing: 0.02em;
    padding: 6px 23px;
  } */
`;

export const Container = styled.div`
  margin: auto;
  max-width: 1140px;
  margin: auto;

  @media only screen and (min-width: 701px) and (max-width: 1200px) {
    max-width: 90%;
  }
  @media only screen and (min-width: 1900px) {
    margin: auto;
  }
  @media only screen and (max-width: 700px) {
    margin: 0 24px;
    padding: 24px 0;
  }
`;
