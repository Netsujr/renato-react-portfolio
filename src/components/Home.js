import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import Intro from './Intro';
import JavascriptIcon from "../images/Icons/javascript-plain.svg";
import ReactIcon from "../images/Icons/react-original.svg";
import RubyIcon from "../images/Icons/ruby-original-wordmark.svg";
import RailsIcon from "../images/Icons/rails-plain-wordmark.svg";
import ReduxIcon from "../images/Icons/redux-original.svg";
import FirebaseIcon from "../images/Icons/firebase-plain-wordmark.svg";
import HTMLIcon from "../images/Icons/html5-original.svg";
import CSSIcon from "../images/Icons/css3-original.svg";
import NodeJsIcon from "../images/Icons/nodejs-original.svg";
// import HerokuIcon from "../images/Icons/heroku-original-wordmark.svg";
// import GithubIcon from "../images/Icons/github-original.svg";
// import LinkedinIcon from "../images/Icons/linkedin-original.svg";
import image1 from "../images/spotify.png";
import image2 from "../images/model-s.jpg";
// JavascriptIcon, ReactIcon, CSSIcon, ReduxIcon, HTMLIcon, FirebaseIcon,
//   NodeJsIcon, RubyIcon, RailsIcon

function Home() {
  return (
    <Container>
      <Intro
        title="About Me"
        description="Introduction"
        leftBtnText="Download Resume"
      />
      <Section
        title="Disney Clone"
        leftBtnText={<a href="#" alt="visitSite" target="_blank" rel="noreferrer">Visit Site</a>}
        rightBtnText={<a href="#" alt="visitGH" target="_blank" rel="noreferrer">Visit Github Repository</a>}
        Img1={image1}
        Img2={image2}
        projectTitle="Details"
        projectDesc="lorem ipsulorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumm"
        JavascriptIcon={JavascriptIcon}
        HTMLIcon={HTMLIcon}
        ReactIcon={ReactIcon}
        CSSIcon={CSSIcon}
        NodeJsIcon={NodeJsIcon}
      />
      <Section
        title="Spotify Clone"
        leftBtnText={<a href="https://www.facebook.com" alt="visitSite" target="_blank" rel="noreferrer">Visit Site</a>}
        rightBtnText={<a href="#" alt="visitGH" target="_blank" rel="noreferrer">Visit Github Repository</a>}
        Img1={image2}
        projectTitle="Details"
        projectDesc="lorem ipsulorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumm"
        JavascriptIcon={JavascriptIcon}
        HTMLIcon={HTMLIcon}
        ReactIcon={ReactIcon}
        CSSIcon={CSSIcon}
        FirebaseIcon={FirebaseIcon}
      />

      <Section
        title="Artistible"
        leftBtnText={<a href="https://www.facebook.com" alt="visitSite" target="_blank" rel="noreferrer">Visit Site</a>}
        rightBtnText={<a href="#" alt="visitGH" target="_blank" rel="noreferrer">Visit Github Repository</a>}
        Img1={image2}
        projectTitle="Details"
        projectDesc="lorem ipsulorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumm"
        RubyIcon={RubyIcon}
        RailsIcon={RailsIcon}
        HTMLIcon={HTMLIcon}
        CSSIcon={CSSIcon}
        JavascriptIcon={JavascriptIcon}
      />

      <Section
        title="Tesla Clone"
        leftBtnText={<a href="https://www.facebook.com" alt="visitSite" target="_blank" rel="noreferrer">Visit Site</a>}
        rightBtnText={<a href="#" alt="visitGH" target="_blank" rel="noreferrer">Visit Github Repository</a>}
        Img1={image2}
        projectTitle="Details"
        projectDesc="lorem ipsulorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumm"
        JavascriptIcon={JavascriptIcon}
        HTMLIcon={HTMLIcon}
        ReactIcon={ReactIcon}
        CSSIcon={CSSIcon}
      />

      <Section
        title="Movie-List"
        leftBtnText={<a href="https://www.facebook.com" alt="visitSite" target="_blank" rel="noreferrer">Visit Site</a>}
        rightBtnText={<a href="#" alt="visitGH" target="_blank" rel="noreferrer">Visit Github Repository</a>}
        Img1={image2}
        projectTitle="Details"
        projectDesc="lorem ipsulorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumm"
        RubyIcon={RubyIcon}
        RailsIcon={RailsIcon}
        HTMLIcon={HTMLIcon}
        CSSIcon={CSSIcon}
      />

      <Section
        title="TinyMe"
        leftBtnText={<a href="https://www.facebook.com" alt="visitSite" target="_blank" rel="noreferrer">Visit Site</a>}
        rightBtnText={<a href="#" alt="visitGH" target="_blank" rel="noreferrer">Visit Github Repository</a>}
        Img1={image2}
        projectTitle="Details"
        projectDesc="lorem ipsulorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumm"
        HTMLIcon={HTMLIcon}
        CSSIcon={CSSIcon}
        JavascriptIcon={JavascriptIcon}
      />

      <Section
        title="Zoom Clone"
        leftBtnText={<a href="https://www.facebook.com" alt="visitSite" target="_blank" rel="noreferrer">Visit Site</a>}
        rightBtnText={<a href="#" alt="visitGH" target="_blank" rel="noreferrer">Visit Github Repository</a>}
        Img1={image2}
        projectTitle="Details"
        projectDesc="lorem ipsulorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumm"

      />

      <Section
        title="Mini Projects"
        leftBtnText={<a href="https://www.facebook.com" alt="visitSite" target="_blank" rel="noreferrer">Visit Site</a>}
        rightBtnText={<a href="#" alt="visitGH" target="_blank" rel="noreferrer">Visit Github Repository</a>}
        Img1={image2}
        projectTitle="Details"
        projectDesc="lorem ipsulorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumm"
      />

    </Container>
  );
}

export default Home;

const Container = styled.div`
  /* width: 100vw; */
  `;

  // const SectionContainer = styled.div`
  //   width: 100vw;
  //   height: 100vh;
  //   `;
