import React from 'react';
import styled from 'styled-components';
import ImgSlider from '../ImgSlider';
import Fade from 'react-reveal/Fade';
import BackGround from "../../images/background2.jpg";
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
    <h1>Disney Clone</h1>
    </ItemText>
    </Fade>
    <ProjectContainer>
    <ProjectInfo >
    <h2>Details</h2>
    <h4>Role:</h4>
    <p>For this project, I wanted to practice my styling of a webpage using React. I only added links to the 'Home' button and a details page when clicking on a movie.</p>
    <h4>Problems:</h4>
    <p>I had three major issues during prodcution: <br></br> 1. Login authentication function wasn't working after deployment. <br></br> 2. Linking each movie to its respective details page. <br></br> 3. It was my first time using Firebase, so naturally I had to get familiar with the platform.  </p>
    <h4>Solution:</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, officia natus? Necessitatibus dolorem provident fugit maxime debitis quam, a dolor quia labore voluptas enim, iusto, numquam nam dolores vitae voluptatibus!</p>
    </ProjectInfo>
    <SliderContainer>
    <IconContainer>
    <Icons src={JavascriptIcon} />
    <Icons src={ReactIcon} />
    <Icons src={ReduxIcon} />
    <Icons src={HTMLIcon} />
    <Icons src={CSSIcon} />
    <Icons src={FirebaseIcon} />
    </IconContainer>
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
  background-color: rgba(63, 124, 172, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width : 768px) {
    min-height: 150vh;
  }
  `;
  // sc for const shortcut
  const ItemText = styled.div`
  padding-top: 12vh;
  text-align: center;
  color: white;
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
  background-color: rgba(136, 217, 230, 1);
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
    color: black;
    text-decoration: none;
  }

  &:hover {
    background-color: rgba(190, 226, 239, 1);
  }
  `;

  const RightButton = styled(LeftButton)`
  /* background-color: rgba(250, 200, 205, 1);
  &:hover {
    background-color: rgba(250, 200, 205, 0.7) !important;
  } */
  `;


  const Buttons = styled.div`
  /* border: 2px solid green; */
  width: 100vw;
  display: flex;
  justify-content: center;
  background: rgba(13, 24, 33, 0.9);
  @media (max-width : 768px) {
    max-width: 100%;
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
  /* object-fit: contain; */
  /* overflow: hidden; */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: -10px;
  @media (max-width : 768px) {
    max-width: 100%;
    max-height: 40vh;
    display: flex;
    bottom: 50px;
  }
  `;

  const ProjectInfo = styled.div`
  /* border: 2px solid blue; */
  margin-left: 45px;
  max-width: 500px;
  color: white;
  @media (max-width : 768px) {
    max-width: 100%;
    margin-top: 70px;

  }

  h2 {
    margin-top: 30px;
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

  const IconContainer = styled.div`
  /* border: 2px solid yellow; */

  display: flex;
  position: absolute;
  top: 35px;
  left: 225px;
  @media (max-width : 768px) {
    top: 65px;
    left: 20;
  }
  `;
