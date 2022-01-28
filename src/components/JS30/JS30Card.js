import React from 'react';
import styled from 'styled-components';
import GithubIcon from "../../images/Icons/github-original.svg";
import website from "../../images/Icons/website.png";

function JS30Card(props) {
  return (
    <Card>
      <div class="face face1">
        <div class="content">
          <h2 class="card1">Drum Kit</h2>
          <p class="card1"> Hit each key for a different sound!</p>
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

  .content {
    align-items: center;
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
