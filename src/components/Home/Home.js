import React from 'react';
import styled from 'styled-components';
import GithubIcon from "../../images/Icons/github-original.svg";
import LinkedinIcon from "../../images/Icons/linkedin-original.svg";
import Panel from './Panel';

function Home() {
  return (
    <Container>
      <Panels>

        <Panel
          backgroundImage={require('../../images/backgrounds/deer.jpeg')}
          title={'About Me'}
          link={'/aboutme'}
          word={'Learn More'}
        />

        <Panel
          backgroundImage={require('../../images/backgrounds/movie.jpeg')}
          title={'Projects'}
          link={'/projects'}
          word={'Check it Out'}
        />

        <Panel
          backgroundImage={require('../../images/backgrounds/code.png')}
          title={'Renato Delboni'}
          extraWord={'Front-End Developer'}
          word={<ContactIcons>
            <a href="https://github.com/netsujr" target="_blank" rel="noreferrer">
              <img src={GithubIcon} alt="Github" />
            </a>
            <a href="https://www.linkedin.com/in/delbonirenato/" target="_blank" rel="noreferrer">
              <img src={LinkedinIcon} alt="Linkedin" />
            </a>
          </ContactIcons>}
        />

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
    `;

const Panels = styled.div`
    /* border: 2px solid red; */
    min-height: 100vh;
    max-width: 100vw;
    overflow: hidden;
    display: flex;

    p:first-child {
      transition-delay: 0.5s;
      transform: translateY(-100vh);
      font-size: 23px;
      /* border: 2px solid red; */
    }

    .open-active p:first-child {
      transition-delay: 0.5s;
      transform: translateY(200%);
      font-size: 23px;
      /* border: 2px solid red; */
    }


    p:last-child {
      transition-delay: 0.5s;
      transform: translateY(100vh);
      /* border: 2px solid red; */
    }

    .open-active p:last-child {
      transition-delay: 0.5s;
      transform: translateY(100%);
      /* border: 2px solid red; */
    }

    p:nth-child(2) {
      font-size: 22px;
      /* border: 2px solid red; */
    }

    .open {
      flex: 1.5;
    }
    `;

const ContactIcons = styled.div`
    display: flex;
    justify-content: center;

    img {
      height: 50px;
      /* border: 2px solid red; */
      background: white;
      border-radius: 10%;
      padding: 2px;

      &:hover {
        transition-delay: 0.5s;
        background: pink;
      }
    }
    `;
