import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import image1 from "../images/spotify.png";
import image2 from "../images/model-s.jpg";


function Home() {
  return (
    <Container>
        <Section
          title="About Me"
          description="project descrtiption here"
          leftBtnText="Download Resume"
        />
      {/* __________________________________________________________________ */}
      <Section
        title="Project 1"
        description="Project descrtiption here"
        leftBtnText={<a href="#" alt="visitSite" target="_blank" rel="noreferrer">Visit Site</a>}
        rightBtnText={<a href="#" alt="visitGH" target="_blank" rel="noreferrer">Visit Github Repository</a>}
        Img1={image1}
        Img2={image2}
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

const SectionContainer = styled.div`
  width: 100vw;
  height: 100vh;
  `;
