import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import comingSoon from "../../images/comingsoon.png";
// import Fade from 'react-reveal/Fade';


// import HerokuIcon from "../images/Icons/heroku-original-wordmark.svg";
// const gif = {
//   running: "../images/gifs/mm-running.gif",
//   finished: "../images/gifs/mm-finished.gif"
// }


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
      <Card>
        <img src={comingSoon} alt="" />
        <CardBody>
          <CardTitle>Card Title</CardTitle>
          <CardDesc>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </CardDesc>
          <Button variant="primary">Go somewhere</Button>
        </CardBody>
      </Card>
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

const CardBody = styled.div`

`;

const CardTitle = styled.div`

`;

const CardDesc = styled.div`

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

const ButtonGroup = styled.div`
display: flex;
margin: 15px 10px;
cursor: pointer;
@media (max-width : 768px) {
  flex-direction: column;
}
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
