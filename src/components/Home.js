import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import ImgSlider from './ImgSlider';
import model from "../images/model-s.jpg";

function Home() {
  return (
    <Container>
      <SectionContainer>
        <Section
          title="About Me"
          description="project descrtiption here"
          backgroundImg=""
          projectImgs=""
          leftBtnText="Download Resume"
        />
        <SliderContainer>
          <ImgSlider
            projectImgs={model}
          />
        </SliderContainer>
      </SectionContainer>
      {/* __________________________________________________________________ */}
      {/* __________________________________________________________________ */}
      {/* __________________________________________________________________ */}
      {/* __________________________________________________________________ */}
      {/* __________________________________________________________________ */}
      {/* __________________________________________________________________ */}
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
  /* width: 100vw; */
  `;

const SectionContainer = styled.div`
  width: 100vw;
  height: 100vh;
  `;

const SliderContainer = styled.div`
  width: 300px;
  height: 400px;
  /* overflow: hidden; */
  border: 2px solid red;
  /* object-fit: contain; */
  `;
