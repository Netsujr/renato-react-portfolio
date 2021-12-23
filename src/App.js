import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import DisneyClone from './components/projects/DisneyClone';
import SpotifyClone from './components/projects/SpotifyClone';
import Artistible from './components/projects/Artistible';
import TeslaClone from './components/projects/TeslaClone';
import MovieList from './components/projects/MovieList';
import TinyMe from './components/projects/TinyMe';
import ZoomClone from './components/projects/ZoomClone';
import MiniProjects from './components/projects/MiniProjects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}
          />

          <Route exact path="/disney" element={
            <DisneyClone
              leftBtnText={<a href="https://disney-clone-renato.herokuapp.com/" alt="visitSite" target="_blank" rel="noreferrer">Visit Site</a>}
              rightBtnText={<a href="https://github.com/Netsujr/disney-clone" alt="visitGH" target="_blank" rel="noreferrer">Visit Github Repository</a>} />}
          />

          <Route exact path="/spotify" element={
            <SpotifyClone
              leftBtnText={<a href="http://renato-spotify-clone.herokuapp.com" alt="visitSite" target="_blank" rel="noreferrer">Visit Site</a>}
              rightBtnText={<a href="https://github.com/Netsujr/spotify-clone" alt="visitGH" target="_blank" rel="noreferrer">Visit Github Repository</a>} />
          } />

          <Route exact path="/artistible" element={
            <Artistible
              leftBtnText={<a href="https://artistible.herokuapp.com/" alt="visitSite" target="_blank" rel="noreferrer">Visit Site</a>}
              rightBtnText={<a href="https://github.com/Netsujr/artistible" alt="visitGH" target="_blank" rel="noreferrer">Visit Github Repository</a>} />
          } />

          <Route exact path="/tesla" element={
            <TeslaClone
              leftBtnText={<a href="https://renato-tesla-clone.herokuapp.com/" alt="visitSite" target="_blank" rel="noreferrer">Visit Site</a>}
              rightBtnText={<a href="https://github.com/Netsujr/tesla_clone_using_react" alt="visitGH" target="_blank" rel="noreferrer">Visit Github Repository</a>} />
          } />

          <Route exact path="/movielist" element={
            <MovieList
              leftBtnText={<a href="http://renato-movie-list.herokuapp.com" alt="visitSite" target="_blank" rel="noreferrer">Visit Site</a>}
              rightBtnText={<a href="https://github.com/Netsujr/rails-watch-list" alt="visitGH" target="_blank" rel="noreferrer">Visit Github Repository</a>} />
          } />

          <Route exact path="/tinyme" element={
            <TinyMe
              leftBtnText={<a href="https://reverent-hermann-98a8cb.netlify.app/" alt="visitSite" target="_blank" rel="noreferrer">Visit Site</a>}
              rightBtnText={<a href="https://github.com/Netsujr/TinymeStudios" alt="visitGH" target="_blank" rel="noreferrer">Visit Github Repository</a>} />
          } />

          <Route exact path="/zoom" element={
            <ZoomClone
              leftBtnText={<a href="#" alt="visitSite" target="_blank" rel="noreferrer">Visit Site</a>}
              rightBtnText={<a href="#" alt="visitGH" target="_blank" rel="noreferrer">Visit Github Repository</a>} />
          } />

          <Route exact path="/" element={
            <MiniProjects />
          } />

          {/* <Route exact path="/" element={
        Extra project in here
      } /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
