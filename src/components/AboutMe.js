import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Renato from '../images/RenP.png';
import running from "../images/gifs/mm-running.gif";
import finished from "../images/gifs/mm-finished.gif";
import GithubIcon from "../images/Icons/github-original.svg";
import LinkedinIcon from "../images/Icons/linkedin-original.svg";
// import HerokuIcon from "../images/Icons/heroku-original-wordmark.svg";
// const gif = {
//   running: "../images/gifs/mm-running.gif",
//   finished: "../images/gifs/mm-finished.gif"
// }


function Section({ leftBtnText, rightBtnText }) {


  const activateFinished = () => {
    let run = document.querySelector(".run");
    let done = document.querySelector(".done");
    run.style.display = "none";
    done.style.display = "flex";
  }

  const activateRunning = () => {
    let run = document.querySelector(".run");
    let done = document.querySelector(".done");
    run.style.display = "flex";
    done.style.display = "none";
  }



  return (
    <Wrap>
      <ItemText>
        <h1>Front-End Developer | </h1>
        <RightIcons>
          <a href="https://github.com/netsujr" target="_blank" rel="noreferrer">
            <img src={GithubIcon} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/delbonirenato/" target="_blank" rel="noreferrer">
            <img src={LinkedinIcon} alt="Linkedin" />
          </a>
        </RightIcons>
      </ItemText>
      <AboutMeContainer>
        <Fade top>
          <InfoContainer>
            <p> In Japan (Yokohama) since 2018, moved here right after I graduated from University. Front-end developer looking for a job in Tokyo. Experienced with HTML, CSS, Javascript, and a number of other front-end tools and technologies.
              <br />
              <br />
              Even though I'm currently looking for a front-ent position, my ultimate goal would be to become a tech lead/full-stack developer in the future. Even though it's ambitious, I am a very fast learner and my passion to do better always drives me forward. Most of my experience comes from using Ruby on Rails, but I am keen to learn further technologies. I’ve also been actively improving my Javascript/React.js skills, as I really enjoy the front-end aspect of web development. I am excited to start learning other frameworks as well. It would be great to be given the opportunity to display my skills and become part of a strong team.
              <br />
              <br />
              Currently, I am working part-time for Stats Perform as a soccer scout/data analyst. My passion for soccer takes me around Japan where I get to watch something I love and work at the same time. Since the J-league is on winter break, I have a little more time to work on projects. Feel free to check them out above!
              <br />
              <br />
              Renato Delboni</p>
          </InfoContainer>
        </Fade>
        <Fade bottom>
          <ImgContainer>
            <img src={Renato} alt="RenatoProfile" />
          </ImgContainer>
        </Fade>
      </AboutMeContainer>
      <GifContainer>
        <Running>
          <img class="run" src={running} alt="Megaman-Running" onClick={activateFinished} />
        </Running>
        <Finished>
          <img class="done" src={finished} alt="Megaman-Finsihed" onClick={activateRunning} />
        </Finished>
      </GifContainer>
      <Buttons>
        <ButtonGroup>
          <LeftButton>
            {leftBtnText}
          </LeftButton>
          {rightBtnText &&
            <RightButton>
              {rightBtnText}
            </RightButton>
          }
        </ButtonGroup>
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  background-color: rgba(248, 241, 255, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
@media (max-width : 768px) {
  flex-direction: column-reverse;
}

h1{
  margin-top: -7px;
  margin-right: 2px;
  @media (max-width : 768px) {
    font-size: 24px;
    margin-top: -4px;
  }
}
`

const ButtonGroup = styled.div`
display: flex;
margin: 15px 10px;
cursor: pointer;
`

const LeftButton = styled.div`
background-color: rgba(9, 21, 64, 0.8);
height: 40px;
width: 256px;
display: flex;
justify-content: center;
align-items: center;
/* border: 0.1px solid black; */
border-radius: 100px;
opacity: 0.85;
text-transform: uppercase;
font-size: 12px;
margin: 8px;
transition: all 250ms ease;

& a {
  color: white;
  text-decoration: none;
}

&:hover {
  background-color: rgba(9, 21, 64, 0.9);
}
`;

const RightButton = styled(LeftButton)`
`;

const Buttons = styled.div`
/* border: 2px solid green; */
width: 100vw;
display: flex;
justify-content: center;
background: rgba(48, 197, 255, 0.4);
@media (max-width : 768px) {
  max-width: 100%;
  margin-top: 20px;
}
`;

const AboutMeContainer = styled.div`
/* border: 2px solid purple; */
flex: 1;
width: 100vw;
display: flex;
@media (max-width : 768px) {
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
}
`;

const ImgContainer = styled.div`
/* border: 2px solid black; */
width: 35vw;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 30px;

img {
  border-radius: 20px;
  box-shadow: 2px 2px 10px 1px;
  margin-bottom: 40px;
}
`;

const InfoContainer = styled.div`
/* border: 2px solid red; */
width: 65vw;
height: 100%;
display: flex;
padding: 30px;
justify-content: center;
align-items: center;
@media (max-width : 768px) {
  width: 90vw;
}

p {
  text-align: justify;
  font-size: 16px;
  padding: 20px;
}

`;

const GifContainer = styled.div`
/* border: 1px solid black; */
display: flex;
width: 100vw;
max-height: 50px;
justify-content: center;
margin-top: -22px;

`;

const Running = styled.div`
img {
  /* border: 1px solid black; */
  max-height: 50px;
  cursor: pointer;
  z-index: 1;
}
`;

const Finished = styled.div`
img {
  /* border: 1px solid black; */
  max-height: 50px;
  cursor: pointer;
  display: none;
  z-index: 1;
}
`;

const RightIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3px;

  img {
    height: 30px;
    /* border-radius: 5px; */
    padding: 2px;
    margin: 0px 2px;

    &:hover {
      height: 32px;
    }
  }
  `;
