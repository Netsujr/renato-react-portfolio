import React from 'react';
import styled from 'styled-components';
import Intro from './Intro';
import DisneyClone from './projects/DisneyClone';
import SpotifyClone from './projects/SpotifyClone';
import Artistible from './projects/Artistible';
import TeslaClone from './projects/TeslaClone';
import TinyMe from './projects/TinyMe';
import zoomClone from './projects/zoomClone';
import MovieList from './projects/MovieList';
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

      <TeslaClone
        leftBtnText={<a href="https://renato-tesla-clone.herokuapp.com/" alt="visitSite" target="_blank" rel="noreferrer">Visit Site</a>}
        rightBtnText={<a href="https://github.com/Netsujr/tesla_clone_using_react" alt="visitGH" target="_blank" rel="noreferrer">Visit Github Repository</a>}
      />

      <MovieList
        leftBtnText={<a href="http://renato-movie-list.herokuapp.com" alt="visitSite" target="_blank" rel="noreferrer">Visit Site</a>}
        rightBtnText={<a href="https://github.com/Netsujr/rails-watch-list" alt="visitGH" target="_blank" rel="noreferrer">Visit Github Repository</a>}
      />

      <TinyMe
        leftBtnText={<a href="https://reverent-hermann-98a8cb.netlify.app/" alt="visitSite" target="_blank" rel="noreferrer">Visit Site</a>}
        rightBtnText={<a href="https://github.com/Netsujr/TinymeStudios" alt="visitGH" target="_blank" rel="noreferrer">Visit Github Repository</a>}
      />

      <zoomClone
        leftBtnText={<a href="#" alt="visitSite" target="_blank" rel="noreferrer">Visit Site</a>}
        rightBtnText={<a href="#" alt="visitGH" target="_blank" rel="noreferrer">Visit Github Repository</a>}
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
