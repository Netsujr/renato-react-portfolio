import React from 'react';
import styled from 'styled-components';
import comingSoon from "../../images/comingsoon.png";
import rps from "../../images/MiniProjects/Rock-paper-scissors.png";
import tm1 from "../../images/TinyMe/one.png";
import theme from '../../images/MiniProjects/theme_toggle.png';
import counter from '../../images/MiniProjects/counter.png';
import grocery from '../../images/MiniProjects/grocery.png';
import blackjack from '../../images/MiniProjects/blackjack.png';
import calculator from '../../images/MiniProjects/calculator.png';
import snake from '../../images/MiniProjects/snake.png';
import MiniProjectCard from './MiniProjectCard';



function Section() {
  return (
    <Wrap>
      <ItemText>
        <h1>Mini Projects</h1>
      </ItemText>
      <Cards>

        <MiniProjectCard
          title="JS Snake Game"
          siteLink="https://netsujr.github.io/JS_SnakeGame/"
          GhLink="https://github.com/Netsujr/JS_SnakeGame"
          description="Speed increases as you eat food. Whats your highest score?"
          cardImg={snake}
        />

        <MiniProjectCard
          title="Javascript Calculator"
          siteLink="https://netsujr.github.io/JS_Calculator/"
          GhLink="https://github.com/Netsujr/JS_Calculator"
          description="A simple calculator that can do basic math operations."
          cardImg={calculator}
        />

        <MiniProjectCard
          title="Rock, Paper, Scissors"
          siteLink="https://distracted-mahavira-252b8c.netlify.app/"
          GhLink="https://github.com/Netsujr/rock-paper-scissors"
          description="A quick game of R-P-S, can you beat my super intelligent AI? Used Javascript, HTML and CSS"
          cardImg={rps}
        />

        <MiniProjectCard
          title="Javascript BlackJack"
          siteLink="https://hungry-mestorf-4efc96.netlify.app/"
          GhLink="https://github.com/Netsujr/javascript_blackjack"
          description="Can you beat my AI's logic? Dont think so... Made using JS, HTML, CSS"
          cardImg={blackjack}
        />

        <MiniProjectCard
          title="TinyMe Studios"
          siteLink="https://reverent-hermann-98a8cb.netlify.app/"
          GhLink="https://github.com/Netsujr/TinymeStudios"
          description="A landing page for a photographer client. Styling practice using JS, HTML, CSS"
          cardImg={tm1}
        />

          <MiniProjectCard
          title="Theme Toggler"
          siteLink="https://naughty-einstein-a30f95.netlify.app/"
          GhLink="https://github.com/Netsujr/Changing_Themes"
          description="A simple theme changer. Styling practice using JS, HTML, CSS"
          cardImg={theme}
        />

        <MiniProjectCard
          title="JS Counter"
          siteLink="https://modest-colden-be1fdb.netlify.app/"
          GhLink="https://github.com/Netsujr/simple_counter_js"
          description="A simple JS counter. Can you find both secrets? Made using JS, HTML, CSS"
          cardImg={counter}
        />

        <MiniProjectCard
          title="JS Grocery List"
          siteLink="https://thirsty-austin-932dc8.netlify.app"
          GhLink="https://github.com/Netsujr/JavaScript_grocery_list"
          description="A JS grocery List. Add/Remove/Edit your items. Made using JS, HTML, CSS"
          cardImg={grocery}
        />

        <MiniProjectCard
          title="My Webstore"
          siteLink=""
          GhLink=""
          description="A webstore using a variety of tools. workshop ran by Ben W."
          cardImg={comingSoon}
        />
      </Cards>
    </Wrap>
  );
}

export default Section;

const Cards = styled.div`
  /* border: 1px solid orange; */
  min-width: 100vw;
  min-height: 100vh;
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
  @media (max-width: 768px) {
    max-height: 100%;
  }

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