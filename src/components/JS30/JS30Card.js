import React from 'react';
import styled from 'styled-components';
import GithubIcon from "../../images/Icons/github-original.svg";
import website from "../../images/Icons/website.png";

function JS30Card({ title, description, githubLink, websiteLink, faceTitle }) {
  return (
    <Card>
    <Face>
    <InnerFace>
    <Content>
    <h2>{title}</h2>
    <p> {description}</p>
    <ContactIcons>
    <a href={githubLink} target="_blank" rel="noreferrer">
    <img src={GithubIcon} alt="Github" />
    </a>
    <a href={websiteLink} target="_blank" rel="noreferrer">
    <img src={website} alt="WebSite" />
    </a>
    </ContactIcons>
    </Content>
    </InnerFace>
    </Face>
    <Face>
    <OuterFace>
    <h2>{faceTitle}</h2>
    </OuterFace>
    </Face>
    </Card>
    );
  }

  export default JS30Card;

  const Card = styled.div`
  position: relative;
  width: 200px;
  height: 250px;
  margin: 15px auto;
  background: #000;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  `;

  const Content = styled.div`
  align-items: center;
  `;

  const ContactIcons = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px auto;

  img {
    height: 30px;
    /* border-radius: 5px; */
    padding: 2px;
    margin: 0 10px;
    background: white;
    border-radius: 50%;

    &:hover {
      height: 32px;
    }
  }
  `;

  const Face = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  `;

  const InnerFace = styled.div`
  /* face1  */
  box-sizing: border-box;
  padding: 20px;

  h2 {
    margin: 0;
    padding: 0;
  }

  `;

  const OuterFace = styled.div`
  /* face2  */
  transition: 0.5s;
  background-image: linear-gradient(25deg, #fda4a4 0%,#fbff50 100%);
  border-radius: 10px;

  h2 {
    margin: 0;
    padding: 0;
    font-size: 100px;
    color: black;
    transition: 0.5s;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 10;
  }

  &:hover {
    height: 60px;
    h2 {
      font-size: 2em;
    }
  }

  `;
