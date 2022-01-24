import React, { useEffect } from 'react';
import './Home.css';
import styled from 'styled-components';
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
    height: 50px;
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
