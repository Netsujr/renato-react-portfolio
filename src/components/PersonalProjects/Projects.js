import React from 'react';
// import '../../App.css';
import styled from 'styled-components';
import comingSoon from "../../images/comingsoon.png";
import GithubIcon from "../../images/Icons/github-original.svg";
import WebsiteIcon from "../../images/Icons/website.png";
import spotify from "../../images/PersonalProjects/SpotifyClone/one.png";
import disney from "../../images/PersonalProjects/DisneyClone/one.png";
import CRUD from "../../images/PersonalProjects/CRUD-store/one.png";
import tesla from "../../images/PersonalProjects/TeslaClone/one.png";
import zoom from "../../images/PersonalProjects/zoomClone/one.png";
import whatsapp from "../../images/PersonalProjects/WhatsappClone/wa1.png";
import movie from '../../images/PersonalProjects/MovieList/one.png';
import art from '../../images/PersonalProjects/Artistible/one.png';
import travel from '../../images/PersonalProjects/TravelAdvisor/one.png';
import doggy from '../../images/PersonalProjects/DoggyTeam/one.png';



function Projects() {
  return (
    <Wrap>
      <ItemText>
        <h1>Projects</h1>
      </ItemText>
      <Cards>
        {/* --------------------------------------------- */}
        <CardBody>
          <img id="image" src={CRUD} alt="redux store" />
          <a href="renato-redux-store.netlify.app/" target="blank_" ><img id='website' src={WebsiteIcon} alt="spotify" /></a>
          <a href="https://github.com/Netsujr/redux_store" target="_blank" rel="noreferrer"><img id='icon' src={GithubIcon} alt="Github" /></a>
          <a href="/projects/redux-store" id="link"><span>Learn More </span>{'→'}</a>
          <CardInfoContainer>
            <CardTitle>
              <h2>CRUD-React & Redux store</h2>
            </CardTitle>
            <CardDesc>
              <p>
                An App created using React that follows the basic CRUD pattern, changing the state from API call.
                It allows you to create, read, update and delete products in your store.
                The user can also add and remove products to the cart. I still need to add a checkout feature, and implement Local Storage.
                At the moment I am working on the inputs for adding/editing products. I will be adding more features as I learn more.
              </p>
            </CardDesc>
          </CardInfoContainer>
        </CardBody>
        {/* --------------------------------------------- */}
        <CardBody>
          <img id="image" src={doggy} alt="doggyteam" />
          <a href="https://renato-doggyteam.netlify.app/" target="blank_" ><img id='website' src={WebsiteIcon} alt="spotify" /></a>
          <a href="https://github.com/Netsujr/dog_soccer_team" target="_blank" rel="noreferrer"><img id='icon' src={GithubIcon} alt="Github" /></a>
          <a href="/projects/doggyteam" id="link"><span>Learn More </span>{'→'}</a>
          <CardInfoContainer>
            <CardTitle>
              <h2>DOG Soccer Team (CRUD React)</h2>
            </CardTitle>
            <CardDesc>
              <p>
                An App created using React that follows the basic CRUD pattern.
                It allows you to create, read, update and delete dogs on your doggy team.
                The dogs comes from a JSON file that is stored on the backend and
                is updated every time you make a change. I was also fetching dog information
                from 3 different third party APIs to fill in information about dogs.
              </p>
            </CardDesc>
          </CardInfoContainer>
        </CardBody>
        {/* --------------------------------------------- */}
        <CardBody>
          <img id="image" src={travel} alt="travelAdvisor" />
          <a href="https://renato-travel-advisor.netlify.app/" target="blank_" ><img id='website' src={WebsiteIcon} alt="spotify" /></a>
          <a href="https://github.com/Netsujr/Renato_Travel_App" target="_blank" rel="noreferrer"><img id='icon' src={GithubIcon} alt="Github" /></a>
          <a href="/projects/travel" id="link"><span>Learn More </span>{'→'}</a>
          <CardInfoContainer>
            <CardTitle>
              <h2>Travel Advisor</h2>
            </CardTitle>
            <CardDesc>
              <p>
                A Travel Advisor app built with React.js and MaterialUI. This app can be used to
                find the best places to go for a trip. It uses the Google Maps API and Rapid API to find the
                best places to go for a trip. Choose between hotels, restaurants, and attractions.
              </p>
            </CardDesc>
          </CardInfoContainer>
        </CardBody>
        {/* --------------------------------------------- */}
        <CardBody>
          <img id="image" src={comingSoon} alt="coming soon" />
          <CardInfoContainer>
            <CardTitle>
              <h2>My Web Store</h2>
            </CardTitle>
            <CardDesc>
              <a href="/projects/" id="link"><span>Learn More </span>{'→'}</a>
              <p>A web-store for my kitty and her instagram. users are able to purchase my kitty Tachi snacks and toys. Will be updated soon to take real payments using stripe. Want to buy my
                cat something? follow the link!
              </p>
            </CardDesc>
          </CardInfoContainer>
        </CardBody>
        {/* --------------------------------------------- */}
        <CardBody>
          <img id="image" src={spotify} alt="spotify" />
          <a href="http://renato-spotify-clone.herokuapp.com" target="blank_" ><img id='website' src={WebsiteIcon} alt="spotify" /></a>
          <a href="https://github.com/Netsujr/spotify-clone" target="_blank" rel="noreferrer"><img id='icon' src={GithubIcon} alt="Github" /></a>
          <a href="/projects/spotify" id="link"><span>Learn More </span>{'→'}</a>
          <CardInfoContainer>
            <CardTitle>
              <h2>Spotify Clone</h2>
            </CardTitle>
            <CardDesc>
              <p>
                A spotify clone app designed for the user to be able to control
                their personal spotify track-list / playlists through the web. This was
                achieved by using Spotify's API and getting permission to authenticate the
                user's unique token via gmail. Firebase used for database storage.
              </p>
            </CardDesc>
          </CardInfoContainer>
        </CardBody>
        {/* --------------------------------------------- */}
        <CardBody>
          <img id="image" src={disney} alt="disney" />
          <a href="https://disney-clone-renato.herokuapp.com/" target="blank_" ><img id='website' src={WebsiteIcon} alt="disney" /></a>
          <a href="https://github.com/Netsujr/disney-clone" target="_blank" rel="noreferrer"><img id="icon" src={GithubIcon} alt="Github" /></a>
          <a href="/projects/disney" id="link"><span>Learn More </span>{'→'}</a>
          <CardInfoContainer>
            <CardTitle>
              <h2>Disney Clone</h2>
            </CardTitle>
            <CardDesc>
              <p>
                Disney web App clone. I took on this project mainly to practice my React
                design skills using styled components and DOM router. I also implemented
                a database using Firebase for the movies and their respective details pages.
                User auth was used for login but no information is stored.
              </p>
            </CardDesc>
          </CardInfoContainer>
        </CardBody>
        {/* --------------------------------------------- */}
        <CardBody>
          <img id="image" src={tesla} alt="Tesla" />
          <a href="https://renato-tesla-clone.herokuapp.com/" target="blank_" ><img id='website' src={WebsiteIcon} alt="tesla" /></a>
          <a href="https://github.com/Netsujr/tesla_clone_using_react" target="_blank" rel="noreferrer"><img id="icon" src={GithubIcon} alt="Github" /></a>
          <a href="/projects/tesla" id="link"><span>Learn More </span>{'→'}</a>
          <CardInfoContainer>
            <CardTitle>
              <h2>Tesla Clone</h2>
            </CardTitle>
            <CardDesc>
              <p>One of my early React projects. Used to practice using sections and Redux to prevent prop drilling. The links don't work and aren't supposed to, they are there for styling purposes.
                A lot of inspiration form the Tesla Clone project style was used on my portfolio. Pictures from tesla website.
              </p>
            </CardDesc>
          </CardInfoContainer>
        </CardBody>
        {/* --------------------------------------------- */}
        <CardBody>
          <img id="image" src={zoom} alt="zoom" />
          <a href="#" target="blank_" ></a>
          <a href="https://github.com/Netsujr/zoom-clone" target="_blank" rel="noreferrer"><img id="icon" src={GithubIcon} alt="Github" /></a>
          <a href="/projects/zoom" id="link"><span>Learn More </span>{'→'}</a>
          <CardInfoContainer>
            <CardTitle>
              <h2>Zoom Clone (React Native)</h2>
            </CardTitle>
            <CardDesc>
              <p>
                By far one of my most difficult React projects. Custom API built to host users
                video transmission but I was unable to get cross streaming video between 2 users.
                At the moment even when there are 2 users in the same 'chatroom', user can only see them selves. App will be deployed when this issue is sorted.
              </p>
            </CardDesc>
          </CardInfoContainer>
        </CardBody>
        {/* --------------------------------------------- */}
        <CardBody>
          <img id="image" src={whatsapp} alt="whatsapp" />
          <a href="https://whatsapp-clone-40cda.web.app/" target="blank_" ><img id='website' src={WebsiteIcon} alt="whatsapp" /></a>
          <a href="https://github.com/Netsujr/whatsapp-clone" target="_blank" rel="noreferrer"><img id="icon" src={GithubIcon} alt="Github" /></a>
          <a href="/projects/whatsapp" id="link"><span>Learn More </span>{'→'}</a>
          <CardInfoContainer>
            <CardTitle>
              <h2>WhatsApp Clone</h2>
            </CardTitle>
            <CardDesc>
              <p>WhatsApp clone that also uses firebase to store messages and Chat Rooms. user can login as normal to see messages but token is not stored like in the Spotify Clone for security measures. A really fun app to build. </p>
            </CardDesc>
          </CardInfoContainer>
        </CardBody>
        {/* --------------------------------------------- */}
        <CardBody>
          <img id="image" src={art} alt="art" />
          <a href="https://artistible.herokuapp.com/" target="blank_" ><img id='website' src={WebsiteIcon} alt="art" /></a>
          <a href="https://github.com/Netsujr/artistible" target="_blank" rel="noreferrer"><img id="icon" src={GithubIcon} alt="Github" /></a>
          <a href="/projects/art" id="link"><span>Learn More </span>{'→'}</a>
          <CardInfoContainer>
            <CardTitle>
              <h2>Artistable</h2>
            </CardTitle>
            <CardDesc>
              <p>A marketplace app built during my time at Lewagon. Artists are able to sell their services by displaying their latest works. Users can choose artist the want to hire based on their work samples. Seeds were used, artists and works are for presentation purposes only. </p>
            </CardDesc>
          </CardInfoContainer>
        </CardBody>
        {/* --------------------------------------------- */}
        <CardBody>
          <img id="image" src={movie} alt="movie" />
          <a href="http://renato-movie-list.herokuapp.com" target="blank_" ><img id='website' src={WebsiteIcon} alt="movie" /></a>
          <a href="https://github.com/Netsujr/rails-watch-list" target="_blank" rel="noreferrer"><img id="icon" src={GithubIcon} alt="Github" /></a>
          <a href="/projects/movie" id="link"><span>Learn More </span>{'→'}</a>
          <CardInfoContainer>
            <CardTitle>
              <h2>Movie List</h2>
            </CardTitle>
            <CardDesc>
              <p>Create lists with your favorite movies to a selection. App is very open with users being able to destroy or edit each other's lists, an obvious security flaw, however this was one of my first ever apps that I built. I left it as is for
                me to be able to see my own progress when looking back at my early work.
              </p>
            </CardDesc>
          </CardInfoContainer>
        </CardBody>
        {/* --------------------------------------------- */}
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

const CardBody = styled.div`
  border: 2px solid rgba(83, 83, 83, 0.3);
  /* border: solid 1px red; */
  min-width: 75vw;
  min-height: 100%;
  margin: 20px;
  padding: 10px;
  border-radius: 5px;
  position: relative;
  display: flex;
  justify-content: space-between;
  @media (max-width : 768px) {
    flex-direction: column;
    display: flex;
    align-items: center;
    max-height: 100%;
  }

  &:hover {
    #icon, #link, #website {
      opacity: 1;
    }
    border: 2px solid rgba(83, 83, 83, 0.6);
  }

  &:hover {
    background-color: rgba(204, 243, 255, 0.2);
  }

  img {
    width: 250px;
    height: 150px;
    object-fit: cover;
    display: flex;
    align-items: flex-start;
    margin-right: 20px;
    z-index: 0;
    @media (max-width : 768px) {
      width: 200px;
      height: 100px;
      margin-right: 0;
    }
  }

  #icon {
    z-index: 1;
    height: 25px;
    width: 25px;
    display: flex;
    position: absolute;
    top: 10px;
    left: 300px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 50px;
    transition: all .3s;
    opacity: 0;
    @media (max-width : 768px) {
      opacity: 1;
      top: 3px;
      left: 5px;

    }

    &:hover {
      height: 27px;
      width: 27px;
    }
  }

  #website {
    z-index: 1;
    height: 25px;
    width: 25px;
    display: flex;
    position: absolute;
    top: 10px;
    left: 270px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 50px;
    opacity: 0;
    transition: all .3s;
    @media (max-width : 768px) {
      opacity: 1;
      top: 40px;
      left: 5px;
    }

    &:hover {
      height: 27px;
      width: 27px;
    }
  }

  #link {
    z-index: 1;
    padding: .75rem .75rem;
    border-radius: 10rem;
    color: black;
    text-transform: uppercase;
    font-size: 0.5rem;
    letter-spacing: .15rem;
    transition: all .3s;
    overflow: hidden;
    background-color: #A9E1FF;
    position: absolute;
    right: 5px;
    top: 10px;
    opacity: 0;
    @media (max-width : 768px) {
      opacity: 1;
      width: fit-content;
      padding: 0px 5px;
      font-size: 15px;
      span {
        display: none;
      }
    }

    &:hover {
      background-color: black;
      color: #ffffff;
    }
  }
  `;

const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  `;

const CardTitle = styled.div`
  margin-bottom: 2px;
  `;

const CardDesc = styled.div`

  p {
    text-align: start;
    padding: 0px 10px;
    font-size: 16px !important;
    margin-top: 10px;
    @media (max-width : 768px) {
      font-size: 12px !important;
    }
  }

  `;

// sc for const shortcut

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