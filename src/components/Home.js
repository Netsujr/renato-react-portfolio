import React from 'react';
import styled from 'styled-components';
import Section from './Section';
// import model from "../images/model-s.jpg";
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
        description="project descrtiption here"
        leftBtnText="Visit Site"
        rightBtnText="Visit Github Repository"
        images={image1}
      />
      <Section
        title="Project 2"
        description="project descrtiption here"
        leftBtnText="Visit Site"
        rightBtnText="Visit Github Repository"
        images={image2}
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
