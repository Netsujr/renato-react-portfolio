import React from 'react';
import styled from 'styled-components';
import Intro from './Intro';
import Resume from '../RenatoDelboniResume.pdf';
// import MiniProjects from './projects/MiniProjects';

// Mini projects
function Home() {

  return (
    <Container>
      <Intro
        title="About Me"
        description="Introduction"
        leftBtnText={<a href={Resume} alt="Download Resume" download>Download Resume</a>}
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  /* width: 100vw; */
  `;
