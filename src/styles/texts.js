import styled from "styled-components";

export const Heading1 = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 170px;
  font-style: normal;
  font-weight: 800;
  line-height: 0px;
  letter-spacing: 2px;
  color: white;

  @media only screen and (max-width: 845px) {
    font-size: 100px;
  }

  @media only screen and (max-width: 570px) {
    font-size: 80px;
  }

  @media only screen and (max-width: 440px) {
    font-size: 65px;
  }
`;

export const Heading2 = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 30px;
  line-height: 0px;
  letter-spacing: 0.02em;
  color: #ffffff;
  font-weight: 300;
  margin-top: 5px;
  b {
    font-family: "Roboto", sans-serif;
    font-weight: 800;
  }

  @media only screen and (max-width: 845px) {
    font-size: 22px;
  }

  @media only screen and (max-width: 570px) {
    max-width: 150px;
    line-height: 22px;
    font-size: 18px;
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
  height: 40px;
  background-color: #ff009c;
  width: auto;
  border: none;
  border-radius: 30px;
  margin-top: 10px;
  cursor: pointer;

  p {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    color: white;
    font-size: 15px;
    padding: 0px 40px;
    margin-top: 10px;
  }
`;

export const CardTitle = styled.h2`
   font-family: "Roboto", sans-serif ;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: white;
  @media only screen and (max-width: 850px) {
    font-size: 18px;
  }
`;

export const CardText = styled.h2`
  font-family: "Roboto", sans-serif ;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 0px;
  letter-spacing: 1px;
  text-decoration: none;


  @media only screen and (max-width: 850px) {
    font-size: 10px;
  }
`;
export const CardLink = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 0px;
  letter-spacing: 0.01em;
  color: #ffffff;
  margin-top: 6px;
  display: flex;
  justify-content: center;
  text-decoration: none;
  padding-top: 30px;

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
