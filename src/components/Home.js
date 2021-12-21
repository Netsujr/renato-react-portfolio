import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import ImgSlider from './ImgSlider';

function Home() {
  return (
    <Container>
        <Section
          title="About Me"
          description="project descrtiption here"
          backgroundImg=""
          projectImgs=""
          leftBtnText="Download Resume"
        />
      <Section
        title="Project 1"
        description="project descrtiption here"
        backgroundImg=""
        projectImgs=""
        leftBtnText="Visit Site"
        rightBtnText="Visit Github Repository"
      />
      <Section
        title="Project 2"
        description="project descrtiption here"
        backgroundImg=""
        projectImgs=""
        leftBtnText="Visit Site"
        rightBtnText="Visit Github Repository"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  width: 100vw;
  `;

