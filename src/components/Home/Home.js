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
          <p>Hey</p>
          <p>About Me</p>
          <a href="/aboutme"><p>Learn More</p></a>
        </div>
        <div className="panel panel2">
          <p>Give</p>
          <p>Projects</p>
          <p>Receive</p>
        </div>
        <div className="panel panel3">
          <p>Experience</p>
          <p>Renato Delboni</p>
          <p>Today</p>
        </div>
        <div className="panel panel4">
          <p>Give</p>
          <p>Mini-Projects</p>
          <p>You can</p>
        </div>
        <div className="panel panel5">
          <p>Give</p>
          <p>Javascript30</p>
          <p>You can</p>
        </div>
      </Panels>
    </Container >
  );
}

export default Home;

const Container = styled.div`
  max-width: 100vw;
  height: 100%;
  border: 2px solid orange;
  object-fit: contain;
  `;

const Panels = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  display: flex;
  `;

const IconsContainer = styled.div`
  border: 2px solid blue;
  max-width: 100%;
  max-height: 100%;
  padding: 10px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  `;

const Icons = styled.img`
  /* border: 2px solid pink; */
  height: 35px;
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
