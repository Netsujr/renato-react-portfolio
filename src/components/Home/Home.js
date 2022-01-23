import React, { useState } from 'react';
import './Home.css';
import './panels';
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

  return (
    <Container>
      <div className="panels">
        <div className="panel panel1">
          <p>Hey</p>
          <p>Let's</p>
          <p>Dance</p>
        </div>
        <div className="panel panel2">
          <p>Give</p>
          <p>Take</p>
          <p>Receive</p>
        </div>
        <div className="panel panel3">
          <p>Experience</p>
          <p>It</p>
          <p>Today</p>
        </div>
        <div className="panel panel4">
          <p>Give</p>
          <p>All</p>
          <p>You can</p>
        </div>
      </div>
    </Container >
  );
}

export default Home;

const Container = styled.div`
  width: 100vw;
  height: 100%;
  border: 2px solid orange;
  object-fit: contain;
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
