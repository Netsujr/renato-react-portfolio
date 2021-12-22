import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import DisneyClone from './projects/DisneyClone';
import SpotifyClone from './projects/SpotifyClone';
import Artistible from './projects/Artistible';
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
import zc1 from "../images/zoomClone/one.png";
import zc2 from "../images/zoomClone/two.png";
import zc3 from "../images/zoomClone/three.png";
// Mini projects

function Home() {
  return (
    <Container>
      <Intro
        title="About Me"
        description="Introduction"
        leftBtnText="Download Resume"
      />
      <DisneyClone
        leftBtnText={<a href="https://disney-clone-renato.herokuapp.com/" alt="visitSite" target="_blank" rel="noreferrer">Visit Site</a>}
        rightBtnText={<a href="https://github.com/Netsujr/disney-clone" alt="visitGH" target="_blank" rel="noreferrer">Visit Github Repository</a>}
        />

      <SpotifyClone
        leftBtnText={<a href="http://renato-spotify-clone.herokuapp.com" alt="visitSite" target="_blank" rel="noreferrer">Visit Site</a>}
        rightBtnText={<a href="https://github.com/Netsujr/spotify-clone" alt="visitGH" target="_blank" rel="noreferrer">Visit Github Repository</a>}
        />

      <Artistible
        leftBtnText={<a href="https://artistible.herokuapp.com/" alt="visitSite" target="_blank" rel="noreferrer">Visit Site</a>}
        rightBtnText={<a href="https://github.com/Netsujr/artistible" alt="visitGH" target="_blank" rel="noreferrer">Visit Github Repository</a>}
        />

      <Section
        title="Tesla Clone"
        leftBtnText={<a href="https://renato-tesla-clone.herokuapp.com/" alt="visitSite" target="_blank" rel="noreferrer">Visit Site</a>}
        rightBtnText={<a href="https://github.com/Netsujr/tesla_clone_using_react" alt="visitGH" target="_blank" rel="noreferrer">Visit Github Repository</a>}
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
        leftBtnText={<a href="http://renato-movie-list.herokuapp.com" alt="visitSite" target="_blank" rel="noreferrer">Visit Site</a>}
        rightBtnText={<a href="https://github.com/Netsujr/rails-watch-list" alt="visitGH" target="_blank" rel="noreferrer">Visit Github Repository</a>}
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
        leftBtnText={<a href="https://reverent-hermann-98a8cb.netlify.app/" alt="visitSite" target="_blank" rel="noreferrer">Visit Site</a>}
        rightBtnText={<a href="https://github.com/Netsujr/TinymeStudios" alt="visitGH" target="_blank" rel="noreferrer">Visit Github Repository</a>}
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
        leftBtnText={<a href="https://www.facebook.com" alt="visitSite" target="_blank" rel="noreferrer">Online Soon</a>}
        rightBtnText={<a href="#" alt="visitGH" target="_blank" rel="noreferrer">Visit Github Repository</a>}
        Img1={zc1}
        Img2={zc2}
        Img3={zc3}
        projectTitle="Details"
        projectDesc="lorem ipsulorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumm"

      />

      {/* Maybe here I will create a new section to show off mini projects  */}
      {/* <Section
      title="Mini Projects"
      leftBtnText={<a href="https://www.facebook.com" alt="visitSite" target="_blank" rel="noreferrer">Visit Site</a>}
      rightBtnText={<a href="#" alt="visitGH" target="_blank" rel="noreferrer">Visit Github Repository</a>}
      projectTitle="Details"
      projectDesc="lorem ipsulorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumm"
    /> */}

    </Container>
  );
}

export default Home;

const Container = styled.div`
  /* width: 100vw; */
  `;
