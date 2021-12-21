import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return (
    <Container>
      <Section
      title="project 1"
      description="project descrtiption here"
      backgroundImg=""
      leftBtnText="Visit Site"
      rightBtnText="Visit Github Repository"
      />
      {/* <Section />
      <Section />
      <Section /> */}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  width: 100vw;
  `;
