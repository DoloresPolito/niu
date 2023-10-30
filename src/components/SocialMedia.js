import React from "react";
import styled from "styled-components";
import instagram from "../assets/mediaicons/instagram.svg";
import discord from "../assets/mediaicons/discord.svg";
import tiktok from "../assets/mediaicons/tik-tok.svg";
import twitter from "../assets/mediaicons/twitter.svg";
import linkedin from "../assets/mediaicons/linkedin.svg";
import youtube from "../assets/mediaicons/youtube.svg";
import { Link } from "react-router-dom";

function SocialMedia({ view }) {
  return (
    <>
      <SocialMediaContainer view={view}>
        <Link to="https://www.instagram.com/"  target="_blank">
          <img alt="instagram" src={instagram} />
        </Link>
        <Link to="https://www.twitter.com/"  target="_blank">
          <img alt="twitter" src={twitter} />
        </Link>
        <Link to="https://www.tiktok.com/"  target="_blank">
          <img alt="tiktok" src={tiktok} />
        </Link>
        <Link to="https://www.youtube.com/"  target="_blank">
          <img alt="youtube" src={youtube} />
        </Link>
        <Link to="https://www.discord.com/"  target="_blank">
          <img alt="discord" src={discord} />
        </Link>
        <Link to="https://www.linkedin.com/"  target="_blank">
          <img alt="linkedin" src={linkedin} />
        </Link>
      </SocialMediaContainer>
    </>
  );
}

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: ${(props) => (props.view === "cover" ? "180px" : "160px")};

  img {
    width: 21px;
    height: 21px;
    cursor: pointer;
  }

  @media only screen and (max-width: 900px) {
    width: 220px;
    padding: 18px;
    img {
      width: ${(props) => (props.view === "footer" ? "25px" : "30px")};
      height: ${(props) => (props.view === "footer" ? "25px" : "30px")};
    }
  }
`;

export default SocialMedia;
