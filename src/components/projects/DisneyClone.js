import React from 'react';
import styled from 'styled-components';
import ImgSlider from '../ImgSlider';
import Fade from 'react-reveal/Fade';
import dc1 from "../../images/DisneyClone/one.png";
import dc2 from "../../images/DisneyClone/two.png";
import dc3 from "../../images/DisneyClone/three.png";
import JavascriptIcon from "../../images/Icons/javascript-plain.svg";
import ReactIcon from "../../images/Icons/react-original.svg";
import ReduxIcon from "../../images/Icons/redux-original.svg";
import HTMLIcon from "../../images/Icons/html5-original.svg";
import CSSIcon from "../../images/Icons/css3-original.svg";
import FirebaseIcon from "../../images/Icons/firebase-plain-wordmark.svg";

function Section({ leftBtnText, rightBtnText }) {
  return (
    <Wrap>
    <Fade top>
    <ItemText>
    <h1>Disney Clone |  </h1>
    {/*Put Icons innside Itemtext */}
    <Icons src={JavascriptIcon} />
    <Icons src={ReactIcon} />
    <Icons src={ReduxIcon} />
    <Icons src={HTMLIcon} />
    <Icons src={CSSIcon} />
    <Icons src={FirebaseIcon} />
    </ItemText>
    </Fade>
    <ProjectContainer>
    <ProjectInfo >
    <h2>Details</h2>
    <h4>Role:</h4>
    <p>For this project, I wanted to practice my styling of a webpage using React. I also used react-dom but only added links to the 'Home' button and a details page when clicking on a movie.</p>
    <h4>Problems:</h4>
    <p>I had a few issues during prodcution. Login authentication function wasn't working after deployment. Linking each movie to its respective details page. It was also my first time using Firebase, so naturally I had to get familiar with the platform.  </p>
    <h4>Solutions:</h4>
    <p>I realised a I hadn't updated the re-direct link on firebase for correct authentication. I had to create my own database with respective films as I didnt have access to the Disney db and couldn't find one online. After that, giving each film an ID and linking that to the details page was straightfoward. </p>
    </ProjectInfo>
    <SliderContainer>
    <ImgSlider
    FirstImg={dc1}
    SecondImg={dc2}
    ThirdImg={dc3}
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
border: 2px solid green;
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
border: 2px solid red;
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
