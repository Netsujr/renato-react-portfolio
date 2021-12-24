import React from 'react';
import styled from 'styled-components';
import comingSoon from "../../images/comingsoon.png";
import rps from "../../images/MiniProjects/Rock-paper-scissors.png";
import tm1 from "../../images/TinyMe/one.png";


function Section({ leftBtnText, rightBtnText }) {


  // const activateFinished = () => {
  //   let run = document.querySelector(".run");
  //   let done = document.querySelector(".done");
  //   run.style.display = "none";
  //   done.style.display = "flex";
  // }

  // const activateRunning = () => {
  //   let run = document.querySelector(".run");
  //   let done = document.querySelector(".done");
  //   run.style.display = "flex";
  //   done.style.display = "none";
  // }


  return (
    <Wrap>
      <ItemText>
        <h1>Mini Projects</h1>
      </ItemText>
      <Cards>
        <CardBody>
          <a href="https://distracted-mahavira-252b8c.netlify.app/" target="blank_" ><img src={rps} alt="RockPaperScissors" /></a>
          <CardTitle>
            <h4>Rock, Paper, Scissors</h4>
          </CardTitle>
          <CardDesc>
            <p>A quick game of R-P-S, can you beat my super intelligent AI? Used Javascript, HTML and CSS</p>
          </CardDesc>
        </CardBody>
        <CardBody>
          <a href="https://reverent-hermann-98a8cb.netlify.app/" target="blank_" ><img src={tm1} alt="TinyMeStudio" /></a>
          <CardTitle>
            <h4>TinyMe Studios</h4>
          </CardTitle>
          <CardDesc>
            <p>A landing page for a photographer client. Styling practice using HTML, JS, CSS.</p>
          </CardDesc>
        </CardBody>
        <CardBody>
          <img src={comingSoon} alt="" />
          <CardTitle>
            <h4>My Webstore</h4>
          </CardTitle>
          <CardDesc>
            <p>A westore using a variety of tool. workshop ran by Ben W.</p>
          </CardDesc>
        </CardBody>
        {/* <CardBody>
      <img src={comingSoon} alt="" />
      <CardTitle>
      <h4>My Webstore</h4>
      </CardTitle>
      <CardDesc>
      <p>A westore using a variety of tool. workshop ran by Ben W.</p>
      </CardDesc>
      </CardBody>
      <CardBody>
      <img src={comingSoon} alt="" />
      <CardTitle>
      <h4>My Webstore</h4>
      </CardTitle>
      <CardDesc>
      <p>A westore using a variety of tool. workshop ran by Ben W.</p>
      </CardDesc>
      </CardBody>
      <CardBody>
      <img src={comingSoon} alt="" />
      <CardTitle>
      <h4>My Webstore</h4>
      </CardTitle>
      <CardDesc>
      <p>A westore using a variety of tool. workshop ran by Ben W.</p>
      </CardDesc>
      </CardBody>
      <CardBody>
      <img src={comingSoon} alt="" />
      <CardTitle>
      <h4>My Webstore</h4>
      </CardTitle>
      <CardDesc>
      <p>A westore using a variety of tool. workshop ran by Ben W.</p>
      </CardDesc>
    </CardBody> */}
      </Cards>
    </Wrap>
  );
}

export default Section;

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
  border: 2px solid gray;
  max-width: 200px;
  max-height: 295px;
  margin: 20px;
  padding: 10px;
  border-radius: 5px;

  &:hover {
    border: 3px solid rgba(94, 35, 157, 0.6);
  }

  img {
    width: 175px;
    height: 150px;
    object-fit: cover;
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
  max-width: 100vw;
  min-height: 100vh;
  background-color: rgba(248, 241, 255, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
