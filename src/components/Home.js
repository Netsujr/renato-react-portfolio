import React from 'react';
import styled from 'styled-components';
import AboutMe from './AboutMe';
import Resume from '../DelboniRenatoResume.pdf';

function Home() {

  const activateFinished = () => {
    let run = document.querySelector(".run");
    let done = document.querySelector(".done");
    run.style.display = "none";
    done.style.display = "flex";
  }

  return (
    <Container>
      <AboutMe
        title="About Me"
        leftBtnText={<a href={Resume} alt="Download Resume" onClick={activateFinished} download>Download Resume</a>}
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  /* width: 100vw; */
  `;
