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
          <h1>Details</h1>
          <h4>Role:</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, officia natus? Necessitatibus dolorem provident fugit maxime debitis quam, a dolor quia labore voluptas enim, iusto, numquam nam dolores vitae voluptatibus!</p>
          <h4>Problems:</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, officia natus? Necessitatibus dolorem provident fugit maxime debitis quam, a dolor quia labore voluptas enim, iusto, numquam nam dolores vitae voluptatibus!</p>
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
  min-width: 100vw;
  min-height: 100vh;
  background-color: #8B8BAE;
  /* background-image: linear-gradient(90deg, rgba(0,0,0,0.7) 35%, rgba(255,255,255,0.5) 81%), url('${BackGround}'); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  `;
// sc for const shortcut
const ItemText = styled.div`
  padding-top: 12vh;
  text-align: center;
  color: white;
  `;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 20px;
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
  border: 0.1px solid black;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  margin: 8px;

  & a {
    color: black;
    text-decoration: none;
  }

  &:hover {
    background-color: rgba(136, 217, 230, 0.7);
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
  background: #442b48;
  `;

const ProjectContainer = styled.div`
  /* border: 2px solid green; */
  display: flex;
  justify-content: space-around;
  margin: 0px 60px;
  height: 60vh;
  width: 100vw;
  @media (max-width : 768px) {
    flex-direction: column;
    height: 100vh;
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
    height: 40vh;
  }
  `;

const ProjectInfo = styled.div`
  /* border: 2px solid blue; */
  max-width: 500px;
  color: white;
  /* position: relative; */
  margin-top: 20px;
  @media (max-width : 768px) {
    max-width: 100%
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
    margin-top: 5px;
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
  left: 20;
  @media (max-width : 768px) {
    top: 65px;
    left: 20;
  }
  `;
