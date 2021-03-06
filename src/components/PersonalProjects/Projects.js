import React from 'react';
import styled from 'styled-components';
import comingSoon from "../../images/comingsoon.png";
import spotify from "../../images/PersonalProjects/SpotifyClone/one.png";
import disney from "../../images/PersonalProjects/DisneyClone/one.png";
import CRUD from "../../images/PersonalProjects/CRUD-store/one.png";
import ReduxFilm from "../../images/PersonalProjects/Redux-film/one.png";
import tesla from "../../images/PersonalProjects/TeslaClone/one.png";
import zoom from "../../images/PersonalProjects/zoomClone/one.png";
import whatsapp from "../../images/PersonalProjects/WhatsappClone/wa1.png";
import movie from '../../images/PersonalProjects/MovieList/one.png';
import art from '../../images/PersonalProjects/Artistible/one.png';
import travel from '../../images/PersonalProjects/TravelAdvisor/one.png';
import doggy from '../../images/PersonalProjects/DoggyTeam/one.png';
import ProjectCard from './ProjectCard';


function Projects() {
  return (
    <Wrap>
      <ItemText>
        <h1>Projects</h1>
      </ItemText>
      <Cards>

        <ProjectCard
          title="React Film List"
          description="An App created using React and Redux. It allows the user to search for movies and tv-shows. This app uses the MovieDB API to search for movies and tv-shows with each movie having its own details page with dynamic data from the API. The next step will be for the user to be able to create their own lists, add movies to their list and view their list."
          siteLink="https://renato-redux-filmlist.netlify.app/"
          GhLink="https://github.com/Netsujr/Redux-Movie_List"
          path="redux-film"
          image={ReduxFilm}
        />

        <ProjectCard
          title="CRUD-React & Redux store"
          description="An App created using React that follows the basic CRUD pattern, changing the state from API call.
    It allows you to create, read, update and delete products in your store.
    The user can also add and remove products to the cart. I still need to add a checkout feature, and implement Local Storage.
    At the moment I am working on the inputs for adding/editing products. I will be adding more features as I learn more."
          siteLink="https://renato-redux-store.netlify.app/"
          GhLink="https://github.com/Netsujr/redux_store"
          path="redux-store"
          image={CRUD}
        />

        <ProjectCard
          title="DOG Soccer Team (CRUD React)"
          description="An App created using React that follows the basic CRUD pattern.
    It allows you to create, read, update and delete dogs on your doggy team.
    The dogs comes from a JSON file that is stored on the backend and
    is updated every time you make a change. I was also fetching dog information
    from 3 different third party APIs to fill in information about dogs."
          siteLink="https://renato-doggyteam.netlify.app/"
          GhLink="https://github.com/Netsujr/dog_soccer_team"
          path="doggyteam"
          image={doggy}
        />

        <ProjectCard
          title="Travel Advisor"
          description="A Travel Advisor app built with React.js and MaterialUI. This app can be used to find the best places to go for a trip. It uses the Google Maps API and Rapid API to find the best places to go for a trip. Choose between hotels, restaurants, and attractions."
          siteLink="https://renato-traveladvisor.netlify.app/"
          GhLink="https://github.com/Netsujr/Renato_Travel_App"
          path="travel"
          image={travel}
        />

        <ProjectCard
          title="Spotify Clone"
          description="A spotify clone app designed for the user to be able to control
    their personal spotify track-list / playlists through the web. This was
    achieved by using Spotify's API and getting permission to authenticate the
    user's unique token via gmail. Firebase used for database storage."
          siteLink="http://renato-spotify-clone.herokuapp.app/"
          GhLink="https://github.com/Netsujr/spotify-clone"
          path="spotify"
          image={spotify}
        />

        <ProjectCard
          title="Disney Clone"
          description="Disney web App clone. I took on this project mainly to practice my React
    design skills using styled components and DOM router. I also implemented
    a database using Firebase for the movies and their respective details pages.
    User auth was used for login but no information is stored."
          siteLink="https://disney-clone-renato.herokuapp.com/"
          GhLink="https://github.com/Netsujr/disney-clone"
          path="disney"
          image={disney}
        />

        <ProjectCard
          title="Tesla Clone"
          description="One of my early React projects. Used to practice using sections and Redux to prevent prop drilling. The links don't work and aren't supposed to, they are there for styling purposes.
    A lot of inspiration form the Tesla Clone project style was used on my portfolio. Pictures from tesla website."
          siteLink="https://renato-tesla-clone.herokuapp.com/"
          GhLink="https://github.com/Netsujr/tesla_clone_using_react"
          path="tesla"
          image={tesla}
        />

        <ProjectCard
          title="Zoom Clone (React Native)"
          description="By far one of my most difficult React projects. Custom API built to host users
    video transmission but I was unable to get cross streaming video between 2 users.
    At the moment even when there are 2 users in the same 'chatroom', user can only see them selves. App will be deployed when this issue is sorted."
          // siteLink=""
          GhLink="https://github.com/Netsujr/zoom-clone"
          path="zoom"
          image={zoom}
        />

        <ProjectCard
          title="Whatsapp Clone"
          description="WhatsApp clone that also uses firebase to store messages and Chat Rooms. user can login as normal to see messages but token is not stored like in the Spotify Clone for security measures. A really fun app to build."
          siteLink="https://whatsapp-clone-40cda.web.app/"
          GhLink="https://github.com/Netsujr/whatsapp-clone"
          path="whatsapp"
          image={whatsapp}
        />

        <ProjectCard
          title="Artistable"
          description="A marketplace app built during my time at Lewagon. Artists are able to sell their services by displaying their latest works. Users can choose artist the want to hire based on their work samples. Seeds were used, artists and works are for presentation purposes only."
          siteLink="https://artistible.herokuapp.com/"
          GhLink="https://github.com/Netsujr/artistible"
          path="art"
          image={art}
        />

        <ProjectCard
          title="Movie List"
          description="Create lists with your favorite movies to a selection. App is very open with users being able to destroy or edit each other's lists, an obvious security flaw, however this was one of my first ever apps that I built. I left it as is for
    me to be able to see my own progress when looking back at my early work."
          siteLink="https://movie-list-renato.herokuapp.com/"
          GhLink="https://github.com/Netsujr/rails-watch-list"
          path="movie"
          image={movie}
        />

        <ProjectCard
          title="My Web Store"
          description="A web-store for my kitty and her instagram. users are able to purchase my kitty Tachi snacks and toys. Will be updated soon to take real payments using stripe. Want to buy my cat something? follow the link!"
          // siteLink=""
          // GhLink=""
          // path=""
          image={comingSoon}
        />

      </Cards>
    </Wrap>
  );
}

export default Projects;

const Cards = styled.div`
  /* border: 1px solid orange; */
  max-width: 75vw;
  min-height: 30vh;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  flex-wrap: wrap;
  `;

const Wrap = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: rgba(248, 241, 255, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width : 490px) {
    overflow-x: hidden;
  }
  `;

const ItemText = styled.div`
  /* border: 2px solid orange; */
  width: 100vw;
  padding-top: 12vh;
  justify-content: center;
  text-align: center;
  color: black;
  display: flex;

  h1{
    margin-top: -7px;
    margin-right: 2px;
    @media (max-width : 768px) {
      font-size: 24px;
      margin-top: -4px;
    }
  }
  `
