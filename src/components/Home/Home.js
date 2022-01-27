import React, { useEffect } from 'react';
import '../CSS/Home.css';
import styled from 'styled-components';
import GithubIcon from "../../images/Icons/github-original.svg";
import LinkedinIcon from "../../images/Icons/linkedin-original.svg";
import Panel from './Panel';

function Home() {
  useEffect(() => {
    const panels = document.querySelectorAll('.panel');
    console.log(panels)
    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', wordAppear));
  })


  function toggleOpen() {
    this.classList.toggle('open');
  }

  function wordAppear(event) {
    if (event.propertyName.includes('flex')) {
      this.classList.toggle('open-active');
    }
  }

  return (
    <Container>
      <Panels>
        <Panel
          backgroundImage={require('../../images/backgrounds/deer.jpeg')}
          title={'About Me'}
          link={'/about'}
          word={'Learn More'}
        />

        <Panel
          backgroundImage={require('../../images/backgrounds/movie.jpeg')}
          title={'Projects'}
          link={'/projects'}
          word={'Check it Out'}
        />

        <div className="panel panel3">
          <p id='main'>Front-End Developer</p>
          <p id='name' >Renato Delboni</p>
          <ContactIcons>
            <a id='icons' href="https://github.com/netsujr" target="_blank" rel="noreferrer">
              <img src={GithubIcon} alt="Github" />
            </a>
            <a id='icons' href="https://www.linkedin.com/in/delbonirenato/" target="_blank" rel="noreferrer">
              <img src={LinkedinIcon} alt="Linkedin" />
            </a>
          </ContactIcons>
        </div>
        <Panel
          backgroundImage={require('../../images/backgrounds/snake.JPG')}
          title={'Mini-Projects'}
          link={'/miniprojects'}
          word={'Check it Out'}
        />
        <Panel
          backgroundImage={require('../../images/backgrounds/soccer.jpg')}
          title={'JavaScript30'}
          link={'/javascript30'}
          word={'Check it Out'}
        />
      </Panels>
    </Container >
  );
}

export default Home;

const Container = styled.div`
  max-width: 100vw;
  height: 100%;
  /* border: 2px solid orange; */
  object-fit: contain;

  `;

const Panels = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  display: flex;

  #main {
    font-size: 24px;
  }

  #name {
    font-size: 24px;
  }
  `;

const ContactIcons = styled.div`
  display: flex;
  justify-content: center;

  img {
    height: 53px;
    /* border-radius: 5px; */
    padding: 2px;
    margin: 0 40px;
    background: white;
    border-radius: 50%;

    &:hover {
      height: 55px;
    }
  }
  `;
