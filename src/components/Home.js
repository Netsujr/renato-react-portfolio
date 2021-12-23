import React from 'react';
import styled from 'styled-components';
import Intro from './Intro';
// import MiniProjects from './projects/MiniProjects';

// Mini projects
function Home() {

  return (
    <Container>
      <Intro
        title="About Me"
        description="Introduction"
        leftBtnText="Download Resume"
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
