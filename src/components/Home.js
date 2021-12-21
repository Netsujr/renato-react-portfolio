import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import Intro from './Intro';
import image1 from "../images/spotify.png";
import image2 from "../images/model-s.jpg";


function Home() {
  return (
    <Container>
      <Intro
        title="About Me"
        description="Introduction"
        leftBtnText="Download Resume"
      />
      <Section
      // id="p1"
        title="Project 1"
        description="Project descrtiption here"
        leftBtnText={<a href="#" alt="visitSite" target="_blank" rel="noreferrer">Visit Site</a>}
        rightBtnText={<a href="#" alt="visitGH" target="_blank" rel="noreferrer">Visit Github Repository</a>}
        Img1={image1}
        Img2={image2}
        projectTitle="Project 11"
        projectDesc="lorem ipsulorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumm"
      />

      <Section
        title="Project 2"
        description="Project descrtiption here"
        leftBtnText={<a href="https://www.facebook.com" alt="visitSite" target="_blank" rel="noreferrer">Visit Site</a>}
        rightBtnText={<a href="#" alt="visitGH" target="_blank" rel="noreferrer">Visit Github Repository</a>}
        Img1={image2}
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
