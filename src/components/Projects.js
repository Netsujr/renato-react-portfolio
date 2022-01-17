import React from 'react';
import '../App.css';
import styled from 'styled-components';
import comingSoon from "../images/comingsoon.png";
import GithubIcon from "../images/Icons/github-original.svg";
import WebsiteIcon from "../images/Icons/website.png";
import spotify from "../images/SpotifyClone/one.png";
import disney from "../images/DisneyClone/one.png";
import tesla from "../images/TeslaClone/one.png";
import zoom from "../images/zoomClone/one.png";
import whatsapp from "../images/WhatsappClone/wa1.png";
import movie from '../images/MovieList/one.png';
import art from '../images/Artistible/one.png';

function Projects() {
  return (
    <Wrap>
      <ItemText>
        <h1>Projects</h1>
      </ItemText>
      <Cards>
        {/* --------------------------------------------- */}
        <CardBody>
          <img id="image" src={spotify} alt="RockPaperScissors" />
          <a href="http://renato-spotify-clone.herokuapp.com" target="blank_" ><img id='website' src={WebsiteIcon} alt="spotify" /></a>
          <a href="https://github.com/Netsujr/spotify-clone" target="_blank" rel="noreferrer"><img id='icon' src={GithubIcon} alt="Github" /></a>
          <CardInfoContainer>
            <CardTitle>
              <h4>Spotify Clone</h4>
            </CardTitle>
            <CardDesc>
              <p>A quick game of R-P-S, can you beat my super intelligent AI? Used Javascript, HTML and CSS Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, vitae nisi! Vitae asperiores harum ratione accusamus illum consequatur dolore fugit omnis, quaerat ipsam cupiditate earum quisquam nobis magnam sapiente. Eveniet.</p>
              <a href="http://localhost:3000/projects/spotify" id="link">Learn More</a>
            </CardDesc>
          </CardInfoContainer>
        </CardBody>
        {/* --------------------------------------------- */}
        <CardBody>
          <img id="image" src={disney} alt="disney" />
          <a href="https://disney-clone-renato.herokuapp.com/" target="blank_" ><img id='website' src={WebsiteIcon} alt="disney" /></a>
          <a href="https://github.com/Netsujr/disney-clone" target="_blank" rel="noreferrer"><img id="icon" src={GithubIcon} alt="Github" /></a>
          <CardInfoContainer>
            <CardTitle>
              <h4>Disney Clone</h4>
            </CardTitle>
            <CardDesc>
              <p>Can you beat my AI's logic? Dont think so... Made using JS, HTML, CSS. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatum vero atque autem nobis consequuntur quaerat, nisi quos esse perspiciatis voluptate unde sed ipsam. Quam id beatae numquam quo ipsum.</p>
              <a href="http://localhost:3000/projects/disney" id="link">Learn More</a>
            </CardDesc>
          </CardInfoContainer>
        </CardBody>
        {/* --------------------------------------------- */}
        <CardBody>
          <img id="image" src={tesla} alt="Tesla" />
          <a href="https://renato-tesla-clone.herokuapp.com/" target="blank_" ><img id='website' src={WebsiteIcon} alt="tesla" /></a>
          <a href="https://github.com/Netsujr/tesla_clone_using_react" target="_blank" rel="noreferrer"><img id="icon" src={GithubIcon} alt="Github" /></a>
          <CardInfoContainer>
            <CardTitle>
              <h4>Tesla Clone</h4>
            </CardTitle>
            <CardDesc>
              <p>A landing page for a photographer client. Styling practice using JS, HTML, CSS. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias rem itaque eveniet quo nesciunt doloremque voluptates libero architecto suscipit placeat? Illo quam voluptates commodi ea vero earum. Suscipit, provident et.</p>
              <a href="http://localhost:3000/projects/tinyme" id="link">Learn More</a>
            </CardDesc>
          </CardInfoContainer>
        </CardBody>
        {/* --------------------------------------------- */}
        <CardBody>
          <a href="" target="blank_" ><img id="image" src={zoom} alt="themeToggler" /></a>
          <a href="https://github.com/Netsujr/zoom-clone" target="_blank" rel="noreferrer"><img id="icon" src={GithubIcon} alt="Github" /></a>
          <CardInfoContainer>
            <CardTitle>
              <h4>Zoom Clone</h4>
            </CardTitle>
            <CardDesc>
              <p>A simple page practicing color scheming. Changes theme of page, made using JS, HTML, CSS. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam non cupiditate praesentium quisquam eos molestiae asperiores omnis veniam vitae temporibus eveniet ipsa placeat maiores ab, assumenda architecto nihil sapiente suscipit!</p>
              <a href="http://localhost:3000/projects/zoom" id="link">Learn More</a>
            </CardDesc>
          </CardInfoContainer>
        </CardBody>
        {/* --------------------------------------------- */}
        <CardBody>
          <a href="https://whatsapp-clone-40cda.web.app/" target="blank_" ><img id="image" src={whatsapp} alt="counter" /></a>
          <a href="https://github.com/Netsujr/whatsapp-clone" target="_blank" rel="noreferrer"><img id="icon" src={GithubIcon} alt="Github" /></a>
          <CardInfoContainer>
            <CardTitle>
              <h4>WhatsApp Clone</h4>
            </CardTitle>
            <CardDesc>
              <p>A simple JS counter. Can you find both secrets? Made using JS, HTML, CSS. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, dolores explicabo? Consequatur libero aliquid velit? Consectetur ad provident molestias, natus, cumque at corporis, dolore sint a necessitatibus quae dignissimos obcaecati!</p>
              <a href="http://localhost:3000/projects/whatsapp" id="link">Learn More</a>
            </CardDesc>
          </CardInfoContainer>
        </CardBody>
        {/* --------------------------------------------- */}
        <CardBody>
          <a href="https://artistible.herokuapp.com/" target="blank_" ><img id="image" src={art} alt="groceries" /></a>
          <a href="https://github.com/Netsujr/artistible" target="_blank" rel="noreferrer"><img id="icon" src={GithubIcon} alt="Github" /></a>
          <CardInfoContainer>
            <CardTitle>
              <h4>Artistable</h4>
            </CardTitle>
            <CardDesc>
              <p>A simple JS grocery List. Add/Remove/Edit your items. Made using JS, HTML, CSS. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis corrupti, in eum culpa cupiditate esse delectus consectetur excepturi praesentium deserunt sint quis dicta, nihil quod assumenda ex? Illum, eum eligendi?</p>
              <a href="http://localhost:3000/projects/art" id="link">Learn More</a>
            </CardDesc>
          </CardInfoContainer>
        </CardBody>
        {/* --------------------------------------------- */}
        <CardBody>
          <a href="http://renato-movie-list.herokuapp.com" target="blank_" ><img id="image" src={movie} alt="groceries" /></a>
          <a href="https://github.com/Netsujr/rails-watch-list" target="_blank" rel="noreferrer"><img id="icon" src={GithubIcon} alt="Github" /></a>
          <CardInfoContainer>
            <CardTitle>
              <h4>Movie List</h4>
            </CardTitle>
            <CardDesc>
              <p>A simple JS grocery List. Add/Remove/Edit your items. Made using JS, HTML, CSS. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis corrupti, in eum culpa cupiditate esse delectus consectetur excepturi praesentium deserunt sint quis dicta, nihil quod assumenda ex? Illum, eum eligendi?</p>
              <a href="http://localhost:3000/projects/movie" id="link">Learn More</a>
            </CardDesc>
          </CardInfoContainer>
        </CardBody>
        {/* --------------------------------------------- */}
        <CardBody>
          <img src={comingSoon} alt="" />

          <CardInfoContainer>
            <CardTitle>
              <h4>My Webstore</h4>
            </CardTitle>
            <CardDesc>
              <p>A westore using a variety of tool. workshop ran by Ben W. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, harum nemo corrupti qui eveniet numquam odit. Beatae doloremque dolor dolorem dolorum iste non labore eligendi veniam quod. Recusandae, quod maiores!</p>
              <a href="http://localhost:3000/projects/" id="link">Learn More</a>
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
  /* margin-left: 25px; */
  `;


const CardBody = styled.div`
  border: 2px solid rgba(83, 83, 83, 0.3);
  min-width: 75vw;
  min-height: 30vh;
  margin: 20px;
  padding: 10px;
  border-radius: 5px;
  position: relative;
  display: flex;
  justify-content: space-between;

  &:hover {
    #icon, #link, #website {
      opacity: 1;
    }
    border: 2px solid rgba(83, 83, 83, 0.6);
  }

  img {
    width: 300px;
    height: 200px;
    object-fit: cover;
    display: flex;
    align-items: flex-start;
    margin-right: 20px;
    z-index: 0;
    /* justify-content: center;
    align-items: center; */
  }

  #icon {
    z-index: 1;
    height: 30px;
    width: 30px;
    display: flex;
    position: absolute;
    bottom: 10px;
    left: 365px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 50px;
    transition: all .3s;
    opacity: 0;

    &:hover {
      height: 32px;
      width: 32px;
    }
  }

  #website {
    z-index: 1;
    height: 30px;
    width: 30px;
    display: flex;
    position: absolute;
    bottom: 10px;
    left: 330px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 50px;
    opacity: 0;
    transition: all .3s;

    &:hover {
      height: 32px;
      width: 32px;
    }
  }
`;

const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  #link {
    padding: .75rem 1.25rem;
    border-radius: 10rem;
    color: black;
    text-transform: uppercase;
    font-size: 0.6rem;
    letter-spacing: .15rem;
    transition: all .3s;
    overflow: hidden;
    background-color: #A9E1FF;
    position: absolute;
    right: 0px;
    bottom: 0px;
    opacity: 0;

    &:hover {
      background-color: black;
      color: #ffffff;
    }
  }`;

const CardTitle = styled.div`
  margin-bottom: 2px;
  `;

const CardDesc = styled.div`
  p {
    text-align: start;
    padding: 0px 10px;
  }

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
}`

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
