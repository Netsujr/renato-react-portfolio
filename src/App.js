import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home/Home';
import DisneyClone from './components/projects/DisneyClone';
import SpotifyClone from './components/projects/SpotifyClone';
import Artistible from './components/projects/Artistible';
import TeslaClone from './components/projects/TeslaClone';
import MovieList from './components/projects/MovieList';
import WhatsApp from './components/projects/WhatsappClone';
import Travel from './components/projects/TravelAdvisor';
// import TinyMe from './components/projects/TinyMe';
import ZoomClone from './components/projects/ZoomClone';
import MiniProjects from './components/MiniProjects';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Js30 from './components/JS30/Javascript30';
import Resume from './RenatoDelboniResume.pdf';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  const activateFinished = () => {
    let run = document.querySelector(".run");
    let done = document.querySelector(".done");
    run.style.display = "none";
    done.style.display = "flex";
  }
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>

          <Route exact path="/" element={
            <Home />
          } />

          <Route exact path="/projects/travel" element={
            <Travel
              leftBtnText={<a href="https://renato-travel-advisor.netlify.app/" alt="visitSite" target="_blank" rel="noreferrer">Visit Site</a>}
              rightBtnText={<a href="https://github.com/Netsujr/Renato_Travel_App" alt="visitGH" target="_blank" rel="noreferrer">Visit Github Repository</a>} />
          } />

          <Route exact path="/projects/whatsapp" element={
            <WhatsApp
              leftBtnText={<a href="https://whatsapp-clone-40cda.web.app/" alt="visitSite" target="_blank" rel="noreferrer">Visit Site</a>}
              rightBtnText={<a href="https://github.com/Netsujr/whatsapp-clone" alt="visitGH" target="_blank" rel="noreferrer">Visit Github Repository</a>} />
          } />

          <Route exact path="/projects/disney" element={
            <DisneyClone
              leftBtnText={<a href="https://disney-clone-renato.herokuapp.com/" alt="visitSite" target="_blank" rel="noreferrer">Visit Site</a>}
              rightBtnText={<a href="https://github.com/Netsujr/disney-clone" alt="visitGH" target="_blank" rel="noreferrer">Visit Github Repository</a>} />
          } />

          <Route exact path="/projects/spotify" element={
            <SpotifyClone
              leftBtnText={<a href="http://renato-spotify-clone.herokuapp.com" alt="visitSite" target="_blank" rel="noreferrer">Visit Site</a>}
              rightBtnText={<a href="https://github.com/Netsujr/spotify-clone" alt="visitGH" target="_blank" rel="noreferrer">Visit Github Repository</a>} />
          } />

          <Route exact path="/projects/art" element={
            <Artistible
              leftBtnText={<a href="https://artistible.herokuapp.com/" alt="visitSite" target="_blank" rel="noreferrer">Visit Site</a>}
              rightBtnText={<a href="https://github.com/Netsujr/artistible" alt="visitGH" target="_blank" rel="noreferrer">Visit Github Repository</a>} />
          } />

          <Route exact path="/projects/tesla" element={
            <TeslaClone
              leftBtnText={<a href="https://renato-tesla-clone.herokuapp.com/" alt="visitSite" target="_blank" rel="noreferrer">Visit Site</a>}
              rightBtnText={<a href="https://github.com/Netsujr/tesla_clone_using_react" alt="visitGH" target="_blank" rel="noreferrer">Visit Github Repository</a>} />
          } />

          <Route exact path="/projects/movie" element={
            <MovieList
              leftBtnText={<a href="http://renato-movie-list.herokuapp.com" alt="visitSite" target="_blank" rel="noreferrer">Visit Site</a>}
              rightBtnText={<a href="https://github.com/Netsujr/rails-watch-list" alt="visitGH" target="_blank" rel="noreferrer">Visit Github Repository</a>} />
          } />

          <Route exact path="/projects/zoom" element={
            <ZoomClone
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              leftBtnText={<a href="" alt="visitSite" target="_blank" rel="noreferrer">Visit Site</a>}
              rightBtnText={<a href="https://github.com/Netsujr/zoom-clone" alt="visitGH" target="_blank" rel="noreferrer">Visit Github Repository</a>} />
          } />

          <Route exact path="/mini-projects" element={
            <MiniProjects />
          } />

          <Route exact path="/projects" element={
            <Projects />
          } />

          <Route exact path="/javascript30" element={
            <Js30 />
          } />

          <Route exact path="/aboutme" element={
            <AboutMe
              title=""
              leftBtnText={<a href={Resume} alt="Download Resume" onClick={activateFinished} download>Download Resume</a>} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
