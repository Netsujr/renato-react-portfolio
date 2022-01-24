import React, { useEffect } from 'react';
import './Home.css';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import renato from '../../images/renatobg.png';
import JavascriptIcon from "../../images/Icons/javascript-plain.svg";
import ReactIcon from "../../images/Icons/react-original.svg";
import FirebaseIcon from "../../images/Icons/firebase-plain-wordmark.svg";
import HTMLIcon from "../../images/Icons/html5-original.svg";
import CSSIcon from "../../images/Icons/css3-original.svg";
import ReduxIcon from "../../images/Icons/redux-original.svg";
import HerokuIcon from "../../images/Icons/heroku-original-wordmark.svg";
import RubyIcon from "../../images/Icons/ruby-original-wordmark.svg";
import RailsIcon from "../../images/Icons/rails-plain-wordmark.svg";
import NodeIcon from "../../images/Icons/nodejs-original.svg";
import GithubIcon from "../../images/Icons/github-original.svg";
import LinkedinIcon from "../../images/Icons/linkedin-original.svg";
import spiderman from '../../images/spiderman.png';

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
        <div className="panel panel1">
          <p>Love: ☀️ 😸 </p>
          <p>About Me</p>
          <a href="/aboutme"><p>Learn More</p></a>
        </div>
        <div className="panel panel2">
          <p>Hate: ❄️ 🦟 </p>
          <p>Projects</p>
          <a href="/projects"><p>Check it Out</p></a>
        </div>
        <div className="panel panel3">
          <p>Food: 🥦 🍿 🍕 </p>
          <p>Renato Delboni</p>
          <ContactIcons>
            <a href="https://github.com/netsujr" target="_blank" rel="noreferrer">
              <img src={GithubIcon} alt="Github" />
            </a>
            <a href="https://www.linkedin.com/in/delbonirenato/" target="_blank" rel="noreferrer">
              <img src={LinkedinIcon} alt="Linkedin" />
            </a>
          </ContactIcons>
        </div>
        <div className="panel panel4">
          <p>Hobby: 🎥 🧳 ⚽ </p>
          <p>Mini-Projects</p>
          <a href="/mini-projects"><p>Check it Out</p></a>
        </div>
        <div className="panel panel5">
          <p>SuperHero: <img id="spiderman" src={spiderman} alt="spiderman" /></p>
          <p className="d-flex">Javascript30</p>
          <a href="/js30"><p>Check it Out</p></a>
        </div>
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

  #spiderman {
    height: 50px;
    width: 60px;
  }
  `;

const ContactIcons = styled.div`
  display: flex;
  justify-content: center;

  img {
    height: 60px;
    /* border-radius: 5px; */
    padding: 2px;
    margin: 0 40px;
    background: white;
    border-radius: 50%;

    &:hover {
      height: 65px;
    }
  }
  `;

const Icons = styled.img`
  /* border: 2px solid pink; */
  height: 25px;
  margin: 5px;
  @media (max-width : 768px) {
    height: 20px;
  }
  `;



// ----------------------------------------------------------------------------------------------------------------

{/* <Fade center>
    <IconsContainer>
    <Tada spy={this.state.counter}>
    <Icons src={JavascriptIcon} onClick={this.handleClick} />
    <Icons src={ReactIcon} />
    <Icons src={FirebaseIcon} />
    <Icons src={HTMLIcon} />
    <Icons src={CSSIcon} />
    <Icons src={NodeIcon} />
    <Icons src={RubyIcon} />
    <Icons src={RailsIcon} />
    <Icons src={ReduxIcon} />
    <Icons src={HerokuIcon} />
    </Tada>
    </IconsContainer>
    </Fade>

    <InfoContainer>
    <Fade left>
    <ImgContainer>
    <img src={renato} alt="" />
    </ImgContainer>
    </Fade>
    </InfoContainer>

  */}
