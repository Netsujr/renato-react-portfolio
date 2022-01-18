import React from 'react';
import styled from 'styled-components';
import ImgSlider from '../ImgSlider';
import Fade from 'react-reveal/Fade';
import sp1 from "../../images/SpotifyClone/one.png";
import sp2 from "../../images/SpotifyClone/two.png";
import sp3 from "../../images/SpotifyClone/three.png";
import JavascriptIcon from "../../images/Icons/javascript-plain.svg";
import ReactIcon from "../../images/Icons/react-original.svg";
import FirebaseIcon from "../../images/Icons/firebase-plain-wordmark.svg";
import HTMLIcon from "../../images/Icons/html5-original.svg";
import CSSIcon from "../../images/Icons/css3-original.svg";

function Section({ leftBtnText, rightBtnText }) {
  return (
    <Wrap>
      <Fade top>
        <ItemText>
          <h1>Spotify Clone |  </h1>
          <Icons src={JavascriptIcon} />
          <Icons src={ReactIcon} />
          <Icons src={FirebaseIcon} />
          <Icons src={HTMLIcon} />
          <Icons src={CSSIcon} />
        </ItemText>
      </Fade>
      <ProjectContainer>
        <ProjectInfo >
          <h2>Details</h2>
          <h4>Role:</h4>
          <p>For this project I was again using a similar authentication login as I did with the Disney Clone project, however, this time I was calling Spotify's API to connect to user's info.</p>
          <h4>Problems:</h4>
          <p>The point of the App was to be able to controll your songs with basic functionallity like changing to a next or previous song. I had alot fun going deeper into Spotify's API capabilities. One little issue I had was matching the album cover to the current song playing, I used the index to find the correct cover.</p>
          <h4>Solution:</h4>
          <p>I'm still debugging this album/song issue. the rest of the app was really fun to build and get to actually work! Please share if you have any ideas! </p>
        </ProjectInfo>
        <SliderContainer>
          <ImgSlider
            FirstImg={sp1}
            SecondImg={sp2}
            ThirdImg={sp3}
          />
        </SliderContainer>
      </ProjectContainer>
      <Buttons>
        <Fade bottom>
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
        </Fade>
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
`;

const ButtonGroup = styled.div`
display: flex;
margin: 15px 10px;
cursor: pointer;
@media (max-width : 768px) {
  flex-direction: column;
}
`;

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
  @media (max-width : 468px) {
    margin-top: 100px;
  }
}
`;

const ProjectContainer = styled.div`
/* border: 2px solid green; */
display: flex;
justify-content: space-around;
margin: 0px 60px;
height: 70vh;
width: 100vw;
@media (max-width : 768px) {
  flex-direction: column;
  height: 100vh;
  max-width: 100%;
}
`;

const SliderContainer = styled.div`
/* border: 2px solid red; */
/* background-color: black; */
max-width: 50%;
display: flex;
justify-content: center;
align-items: center;
padding: -10px;
@media (max-width : 768px) {
  max-width: 100vh;
  display: flex;
  margin-bottom: 100px;
  flex: 1;
}
}
`;

const ProjectInfo = styled.div`
/* border: 2px solid blue; */
margin-left: 45px;
max-width: 500px;
color: white;
@media (max-width : 768px) {
  max-width: 100%;
  margin-left: 15px;
  margin-top: 100px;
}

h2 {
  margin-top: 30px;
  @media (max-width : 490px) {
    margin-top: 90px;
  }
}

h4 {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width : 768px) {
    padding: 2px;
    margin: 10px 10px;
  }
}

p {
  text-align: justify;
  @media (max-width : 768px) {
    padding: 2px;
    margin: 0 20px;
  }
}
`;

const Icons = styled.img`
/* border: 2px solid pink; */
height: 25px;
margin: 5px;
@media (max-width : 768px) {
  height: 20px;
}
`;
