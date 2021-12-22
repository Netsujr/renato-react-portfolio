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
// Sisney
import dc1 from "../images/DisneyClone/one.png";
import dc2 from "../images/DisneyClone/two.png";
import dc3 from "../images/DisneyClone/three.png";
// Spotify
import sp1 from "../images/SpotifyClone/one.png";
import sp2 from "../images/SpotifyClone/two.png";
import sp3 from "../images/SpotifyClone/three.png";
// Artistible
import ar1 from "../images/Artistible/one.png";
import ar2 from "../images/Artistible/two.png";
import ar3 from "../images/Artistible/three.png";
// Movie-List
import ml1 from "../images/MovieList/one.png";
import ml2 from "../images/MovieList/two.png";
import ml3 from "../images/MovieList/three.png";
// TeslaClone
import tc1 from "../images/TeslaClone/one.png";
import tc2 from "../images/TeslaClone/two.png";
import tc3 from "../images/TeslaClone/three.png";
// TinyMe
import tm1 from "../images/TinyMe/one.png";
import tm2 from "../images/TinyMe/two.png";
import tm3 from "../images/TinyMe/three.png";
// zoomClone 

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
        Img1={dc1}
        Img2={dc2}
        Img3={dc3}
        projectTitle="Details"
        projectDesc="lorem ipsulorem ipsumlorem ipsumlorem ipsumlorem iipsumlorem ipsumlorem ipsumlorem iipsumlorem ipsumlorem ipsumlorem iipsumlorem ipsumlorem ipsumlorem iipsumlorem ipsumlorem ipsumlorem iipsumlorem ipsumlorem ipsumlorem iipsumlorem ipsumlorem ipsumlorem iipsumlorem ipsumlorem ipsumlorem iipsumlorem ipsumlorem ipsumlorem iipsumlorem ipsumlorem ipsumlorem iipsumlorem ipsumlorem ipsumlorem iipsumlorem ipsumlorem ipsumlorem iipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumm"
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
        Img1={sp1}
        Img2={sp2}
        Img3={sp3}
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
        Img1={ar1}
        Img2={ar2}
        Img3={ar3}
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
        Img1={tc1}
        Img2={tc2}
        Img3={tc3}
        projectTitle="Details"
        projectDesc="lorem ipsulorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumm"
        JavascriptIcon={JavascriptIcon}
        ReduxIcon={ReduxIcon}
        HTMLIcon={HTMLIcon}
        ReactIcon={ReactIcon}
        CSSIcon={CSSIcon}
      />

      <Section
        title="Movie-List"
        leftBtnText={<a href="https://www.facebook.com" alt="visitSite" target="_blank" rel="noreferrer">Visit Site</a>}
        rightBtnText={<a href="#" alt="visitGH" target="_blank" rel="noreferrer">Visit Github Repository</a>}
        Img1={ml1}
        Img2={ml2}
        Img3={ml3}
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
        Img1={tm1}
        Img2={tm2}
        Img3={tm3}
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
        // Img1={ml1}
        // Img2={ml2}
        // Img3={ml3}
        projectTitle="Details"
        projectDesc="lorem ipsulorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumm"

      />

      <Section
        title="Mini Projects"
        leftBtnText={<a href="https://www.facebook.com" alt="visitSite" target="_blank" rel="noreferrer">Visit Site</a>}
        rightBtnText={<a href="#" alt="visitGH" target="_blank" rel="noreferrer">Visit Github Repository</a>}
        // Img1={image2}
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
