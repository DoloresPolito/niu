import styled from "styled-components";

export const Heading1 = styled.h1`
  font-family: "VisbyBold";
  font-size: 124px;
  font-style: normal;
  font-weight: 800;
  line-height: 100px;
  letter-spacing: 1.5px;
  color: white;

  @media only screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 32px;
  }
`;

export const Heading2 = styled.h2`
  font-family: "Visby";
  font-size: 30px;
  line-height: 0px;
  letter-spacing: 0.02em;
  max-width: 582px;
  color: #ffffff;
  font-weight: 300;
  b {

    font-weight: 900;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 20px;
    line-height: 32px;
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
margin-top: 30px;
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
