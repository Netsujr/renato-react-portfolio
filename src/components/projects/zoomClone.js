import React from 'react';
import styled from 'styled-components';
import ImgSlider from '../ImgSlider';
import Fade from 'react-reveal/Fade';
import arrow from "../../images/Icons/down-arrow.svg";
import zc1 from "../../images/zoomClone/one.png";
import zc2 from "../../images/zoomClone/two.png";
import zc3 from "../../images/zoomClone/three.png";
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
          <h1>Zoom Clone</h1>
        </ItemText>
      </Fade>
      <ProjectContainer>
        <ProjectInfo >
          <h1>Details</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, officia natus? Necessitatibus dolorem provident fugit maxime debitis quam, a dolor quia labore voluptas enim, iusto, numquam nam dolores vitae voluptatibus!</p>
          <IconContainer>
            <Icons src={JavascriptIcon} />
            <Icons src={ReactIcon} />
            <Icons src={ReduxIcon} />
            <Icons src={HTMLIcon} />
            <Icons src={CSSIcon} />
          </IconContainer>
        </ProjectInfo>
        <SliderContainer>
          <ImgSlider
            FirstImg={zc1}
            SecondImg={zc2}
            ThirdImg={zc3}
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
        <DownArrow src={arrow} />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: gray;
    /* background-image: url("") */
    /* ${props => `url("/images/${props.bgImage}")`}; */
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
    background-color: rgba(50, 50, 80, 0.7);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    margin: 8px;

    & a {
      color: white;
      text-decoration: none;
    }

    &:hover {
      background-color: rgba(50, 50, 80, 0.9);
    }
    `;

const RightButton = styled(LeftButton)`
    background-color: rgba(100, 50, 100, 0.7);

    &:hover {
      background-color: rgba(100, 50, 100, 0.9) !important;
    }
    `;

const DownArrow = styled.img`
    height: 40px;
    margin-bottom: 20px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
    `;

const Buttons = styled.div`

    `;

const ProjectContainer = styled.div`
    /* border: 2px solid green; */
    display: flex;
    justify-content: space-around;
    margin: 0px 60px;
    height: 50vh;
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
    position: relative;
    @media (max-width : 768px) {
      max-width: 100%
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
    bottom: 0;
    left: 0;
    margin: 5px;
    @media (max-width : 768px) {
      top: 0;
      left: 0;
    }
    `;
