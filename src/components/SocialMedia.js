import React from "react";
import styled from "styled-components";
import instagram from "../assets/mediaicons/instagram100.png";
import discord from "../assets/mediaicons/discord100.png";
import tiktok from "../assets/mediaicons/tik-tok96.png";
import twitter from "../assets/mediaicons/twitter90.png";
import linkedin from "../assets/mediaicons/linkedin100.png";

function SocialMedia() {
  return (
    <>
      <SocialMediaContainer>
      <img alt="instagram" src={instagram} />
      <img alt="discord" src={discord} />
      <img alt="tiktok" src={tiktok} />
      <img alt="twitter" src={twitter} />
      <img alt="linkedin" src={linkedin} />
      <img alt="instagram" src={instagram} />

      </SocialMediaContainer>
    </>
  );
}

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 180px;


  img{
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  @media only screen and (max-width: 900px) {
    width: 220px;
    padding: 20px;
    img{
    width: 30px;
    height: 30px;

  }
    }
`;

export default SocialMedia;
