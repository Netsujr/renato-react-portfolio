import React from 'react';
import styled from 'styled-components';
import GithubIcon from "../images/Icons/github-original.svg";
import website from "../images/Icons/website.png";
import "./CSS/js30.css"

function Js30() {

  return (
    <CardContainer>
      <Card>
        <div class="face face1">
          <div class="content">
            <h2 class="card1">Drum Kit</h2>
            <p class="card1"> Hit each Ket for a different sound!</p>
            <ContactIcons>
              <a id='icons' href="https://github.com/Netsujr/JS1-DrumKit" target="_blank" rel="noreferrer">
                <img src={GithubIcon} alt="Github" />
              </a>
              <a id='icons' href="https://netsujr.github.io/JS1-DrumKit/" target="_blank" rel="noreferrer">
                <img src={website} alt="website" />
              </a>
            </ContactIcons>
          </div>
        </div>
        <div class="face face2">
          <h2>JS1</h2>
        </div>
      </Card>
      <Card>
        <div class="face face1">
          <div class="content">
            <h2 class="card2">Clock</h2>
            <p class="card2">Real-time clock. Probably needs further styling</p>
            <ContactIcons>
              <a id='icons' href="https://github.com/Netsujr/JS2-Clock" target="_blank" rel="noreferrer">
                <img src={GithubIcon} alt="Github" />
              </a>
              <a id='icons' href="https://netsujr.github.io/JS2-Clock/" target="_blank" rel="noreferrer">
                <img src={website} alt="website" />
              </a>
            </ContactIcons>
          </div>
        </div>
        <div class="face face2">
          <h2>JS2</h2>
        </div>
      </Card>
      <Card>
        <div class="face face1">
          <div class="content">
            <h2 class="card3">CSS Variables</h2>
            <p class="card3">Playing with variables within CSS</p>
            <ContactIcons>
              <a id='icons' href="https://github.com/Netsujr/JS3-CSS_Variables" target="_blank" rel="noreferrer">
                <img src={GithubIcon} alt="Github" />
              </a>
              <a id='icons' href="https://netsujr.github.io/JS3-CSS_Variables/" target="_blank" rel="noreferrer">
                <img src={website} alt="website" />
              </a>
            </ContactIcons>
          </div>
        </div>
        <div class="face face2">
          <h2>JS3</h2>
        </div>
      </Card>
      <Card>
        <div class="face face1">
          <div class="content">
            <h2 class="card4">Flex Panels</h2>
            <p class="card4">Where panels from this portfolio got inspiration!</p>
            <ContactIcons>
              <a id='icons' href="https://github.com/Netsujr/JS5-Flex_Panel_Gallery" target="_blank" rel="noreferrer">
                <img src={GithubIcon} alt="Github" />
              </a>
              <a id='icons' href="https://netsujr.github.io/JS5-Flex_Panel_Gallery/" target="_blank" rel="noreferrer">
                <img src={website} alt="website" />
              </a>
            </ContactIcons>
          </div>
        </div>
        <div class="face face2">
          <h2>JS5</h2>
        </div>
      </Card>
      <Card>
        <div class="face face1">
          <div class="content">
            <h2 class="card5">Type Ahead</h2>
            <p class="card5">Predictive text, hightlights and searches</p>
            <ContactIcons>
              <a id='icons' href="https://github.com/Netsujr/JS6-Type_Ahead" target="_blank" rel="noreferrer">
                <img src={GithubIcon} alt="Github" />
              </a>
              <a id='icons' href="https://netsujr.github.io/JS6-Type_Ahead/" target="_blank" rel="noreferrer">
                <img src={website} alt="website" />
              </a>
            </ContactIcons>
          </div>
        </div>
        <div class="face face2">
          <h2>JS6</h2>
        </div>
      </Card>
      <Card>
        <div class="face face1">
          <div class="content">
            <h2 class="card5">HTML Canvas</h2>
            <p class="card5">Draw to your heart's content</p>
            <ContactIcons>
              <a id='icons' href="https://github.com/Netsujr/JS8-HTML_Canvas" target="_blank" rel="noreferrer">
                <img src={GithubIcon} alt="Github" />
              </a>
              <a id='icons' href="https://netsujr.github.io/JS8-HTML_Canvas/" target="_blank" rel="noreferrer">
                <img src={website} alt="website" />
              </a>
            </ContactIcons>
          </div>
        </div>
        <div class="face face2">
          <h2>JS8</h2>
        </div>
      </Card>
      <Card>
        <div class="face face1">
          <div class="content">
            <h2 class="card5">CheckBoxes</h2>
            <p class="card5">Hold Shift to select boxes in between two boxes.</p>
            <ContactIcons>
              <a id='icons' href="https://github.com/Netsujr/JS10-Checkboxes" target="_blank" rel="noreferrer">
                <img src={GithubIcon} alt="Github" />
              </a>
              <a id='icons' href="https://netsujr.github.io/JS10-Checkboxes/" target="_blank" rel="noreferrer">
                <img src={website} alt="website" />
              </a>
            </ContactIcons>
          </div>
        </div>
        <div class="face face2">
          <h2>JS10</h2>
        </div>
      </Card>
    </CardContainer>
  );
}

export default Js30;

const CardContainer = styled.div`
  max-width: 100vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 5px;
  margin: 30px auto;
  padding: 40px 0;
  `;

const Card = styled.div`
  position: relative;
  width: 200px;
  height: 250px;
  margin: 15px auto;
  background: #000;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);

  .content {
    align-items: center;

  }

  .face {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  .face1 {
    box-sizing: border-box;
    padding: 20px;

    h2 {
      margin: 0;
      padding: 0;
    }
  }

  .card1 {
    background-color: #fffc00;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .card2 {
    background-color: #00fffc;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .card3 {
    background-color: #fc00ff;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .card4 {
    background-color: #fc00ff;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .card5 {
    background-color: #fc00ff;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .face2 {
    transition: 0.5s;

    h2 {
      margin: 0;
      padding: 0;
      font-size: 100px;
      color: black;
      transition: 0.5s;
      text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      z-index: 10;
    }
  }

  &:hover .face.face2 {
    height: 60px;

    h2 {
      font-size: 2em;
    }
  }

  &:nth-child(n) .face.face2 {
    background-image: linear-gradient(25deg, #fda4a4 0%,#fbff50 100%);
    border-radius: 10px;
  }
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
