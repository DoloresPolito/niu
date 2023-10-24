import React from "react";
import styled from "styled-components";
import instagram from "../assets/mediaicons/instagram.svg";
import discord from "../assets/mediaicons/discord.svg";
import tiktok from "../assets/mediaicons/tik-tok.svg";
import twitter from "../assets/mediaicons/twitter.svg";
import linkedin from "../assets/mediaicons/linkedin.svg";

function SocialMedia({view}) {
  return (
    <>
      <SocialMediaContainer view={view}>
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

  width: ${(props) => props.view === "cover" ? "180px" : "160px"};
  /* background-color: ${(props) => props.view === "cover" ? "yellow" : "blue"}; */
 


  img{
    width: 21px;
    height: 21px;
    cursor: pointer;

  }

  @media only screen and (max-width: 900px) {
    width: 220px;
    padding: 18px;
    img{

      width: ${(props) => props.view === "footer" ? "25px" : "30px"};
      height: ${(props) => props.view === "footer" ? "25px" : "30px"};

  }
    }
`;

export default SocialMedia;
