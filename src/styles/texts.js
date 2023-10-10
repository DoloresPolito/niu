import styled from "styled-components";

export const Heading1 = styled.h1`
  font-family: "VisbyBold";
  font-size: 124px;
  font-style: normal;
  font-weight: 800;
  line-height: 0px;
  letter-spacing: 1.5px;
  color: white;

  @media only screen and (max-width: 845px) {
    font-size: 100px;
  }

  @media only screen and (max-width: 570px) {
    font-size: 80px;
  }

  @media only screen and (max-width: 440px) {
    font-size: 60px;
  }
`;

export const Heading2 = styled.h2`
  font-family: "Visby";
  font-size: 30px;
  line-height: 0px;
  letter-spacing: 0.02em;
  color: #ffffff;
  font-weight: 300;
  margin-top: 0px;
  b {
    font-family: "VisbyBold";
    font-weight: 800;
  }

  @media only screen and (max-width: 845px) {
    font-size: 22px;
  }

  @media only screen and (max-width: 570px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 440px) {
    font-size: 16px;
  }
`;

export const Heading3 = styled(Heading1)`
  font-size: 20px;
  line-height: 32px;
`;

export const LargeText = styled.p`
  font-family: "VisbyBold";
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
  height: 50px;
  background-color: #e30052;
  width: auto;
  padding: 10px 60px;
  border: none;
  border-radius: 30px;
  margin-top: 10px;
  color: white;
  font-size: 15px;
`;

export const CardTitle = styled.h2`
  font-family: "VisbyBold";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  /* line-height: 30px; */
  color: white;
  @media only screen and (max-width: 850px) {
    font-size: 18px;
  }
`;

export const CardText = styled.h2`
  font-family: "Visby";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 0px;
  letter-spacing: 1px;
  @media only screen and (max-width: 850px) {
    font-size: 10px;
  }
`;
export const CardLink = styled.p`
  font-family: "Visby";
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
