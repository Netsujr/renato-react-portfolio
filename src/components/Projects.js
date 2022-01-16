import React from 'react';
import '../App.css';
import styled from 'styled-components';
import comingSoon from "../images/comingsoon.png";
import GithubIcon from "../images/Icons/github-original.svg";
import rps from "../images/MiniProjects/Rock-paper-scissors.png";
import tm1 from "../images/TinyMe/one.png";
import theme from '../images/MiniProjects/theme_toggle.png';
import counter from '../images/MiniProjects/counter.png';
import grocery from '../images/MiniProjects/grocery.png';
import blackjack from '../images/MiniProjects/blackjack.png';

function Projects() {
  return (
    <Wrap>
      <ItemText>
        <h1>Projects</h1>
      </ItemText>
      <Cards>
        {/* --------------------------------------------- */}
        <CardBody>
          <a href="https://distracted-mahavira-252b8c.netlify.app/" target="blank_" > <h2>Visit Site</h2><img id="image" src={rps} alt="RockPaperScissors" /></a>
          <a href="https://github.com/Netsujr/rock-paper-scissors" target="_blank" rel="noreferrer"><img id="icon" src={GithubIcon} alt="Github" /></a>
          <a href="http://localhost:3000/projects/spotify">Test link</a>
          <CardTitle>
            <h4>Rock, Paper, Scissors</h4>
          </CardTitle>
          <CardDesc>
            <p>A quick game of R-P-S, can you beat my super intelligent AI? Used Javascript, HTML and CSS</p>
          </CardDesc>
        </CardBody>
        {/* --------------------------------------------- */}
        <CardBody>
          <a href="https://hungry-mestorf-4efc96.netlify.app/" target="blank_" > <h2>Visit Site</h2><img id="image" src={blackjack} alt="blackjack" /></a>
          <a href="https://github.com/Netsujr/javascript_blackjack" target="_blank" rel="noreferrer"><img id="icon" src={GithubIcon} alt="Github" /></a>
          <CardTitle>
            <h4>Javascript BlackJack</h4>
          </CardTitle>
          <CardDesc>
            <p>Can you beat my AI's logic? Dont think so... Made using JS, HTML, CSS.</p>
          </CardDesc>
        </CardBody>
        {/* --------------------------------------------- */}
        <CardBody>
          <a href="https://reverent-hermann-98a8cb.netlify.app/" target="blank_" > <h2>Visit Site</h2><img id="image" src={tm1} alt="TinymeStudios" /></a>
          <a href="https://github.com/Netsujr/TinymeStudios" target="_blank" rel="noreferrer"><img id="icon" src={GithubIcon} alt="Github" /></a>
          <CardTitle>
            <h4>TinyMe Studios</h4>
          </CardTitle>
          <CardDesc>
            <p>A landing page for a photographer client. Styling practice using JS, HTML, CSS.</p>
          </CardDesc>
        </CardBody>
        {/* --------------------------------------------- */}
        <CardBody>
          <a href="https://naughty-einstein-a30f95.netlify.app/" target="blank_" > <h2>Visit Site</h2><img id="image" src={theme} alt="themeToggler" /></a>
          <a href="https://github.com/Netsujr/Changing_Themes" target="_blank" rel="noreferrer"><img id="icon" src={GithubIcon} alt="Github" /></a>
          <CardTitle>
            <h4>Theme toggler</h4>
          </CardTitle>
          <CardDesc>
            <p>A simple page practicing color scheming. Changes theme of page, made using JS, HTML, CSS.</p>
          </CardDesc>
        </CardBody>
        {/* --------------------------------------------- */}
        <CardBody>
          <a href="https://modest-colden-be1fdb.netlify.app/" target="blank_" > <h2>Visit Site</h2><img id="image" src={counter} alt="counter" /></a>
          <a href="https://github.com/Netsujr/simple_counter_js" target="_blank" rel="noreferrer"><img id="icon" src={GithubIcon} alt="Github" /></a>
          <CardTitle>
            <h4>Javascript Counter</h4>
          </CardTitle>
          <CardDesc>
            <p>A simple JS counter. Can you find both secrets? Made using JS, HTML, CSS.</p>
          </CardDesc>
        </CardBody>
        {/* --------------------------------------------- */}
        <CardBody>
          <a href="https://thirsty-austin-932dc8.netlify.app" target="blank_" > <h2>Visit Site</h2><img id="image" src={grocery} alt="groceries" /></a>
          <a href="https://github.com/Netsujr/JavaScript_grocery_list" target="_blank" rel="noreferrer"><img id="icon" src={GithubIcon} alt="Github" /></a>
          <CardTitle>
            <h4>Javascript Grocery List</h4>
          </CardTitle>
          <CardDesc>
            <p>A simple JS grocery List. Add/Remove/Edit your items. Made using JS, HTML, CSS.</p>
          </CardDesc>
        </CardBody>
        {/* --------------------------------------------- */}
        <CardBody>
          <img src={comingSoon} alt="" />
          <CardTitle>
            <h4>My Webstore</h4>
          </CardTitle>
          <CardDesc>
            <p>A westore using a variety of tool. workshop ran by Ben W.</p>
          </CardDesc>
        </CardBody>
        {/* --------------------------------------------- */}
      </Cards>
    </Wrap>
  );
}

export default Projects;

const Cards = styled.div`
  /* border: 1px solid orange; */
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  flex-wrap: wrap;
  /* margin-left: 25px; */
  `;

const CardBody = styled.div`
  border: 2px solid rgba(83, 83, 83, 0.3);
  max-width: 200px;
  max-height: 295px;
  margin: 20px;
  padding: 10px;
  border-radius: 5px;
  position: relative;

  &:hover {
    border: 2px solid rgba(83, 83, 83, 0.6);
    h2 {
      z-index: 1;
    }
    #image {
      opacity: 0.5;
    }
  }

  h2 {
    position: absolute;
    top: 25%;
    left: 23%;
    color: black;
    font-weight: 900;
    z-index: -1;
    background-color: rgba(250, 250, 250, 0.6);
    padding: 2px 9px;
    border-radius: 15px;
  }
}

img {
  width: 175px;
  height: 150px;
  object-fit: cover;
  z-index: 0;
}

#image {
  z-index: 0;
}

#icon {
  z-index: 0;
  height: 30px;
  width: 30px;
  display: flex;
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 50px;

  &:hover {
    height: 32px;
    width: 32px;
  }
}

`;

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
