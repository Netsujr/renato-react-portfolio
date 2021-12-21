import React from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import arrow from "../images/down-arrow.svg";

function Section({ title, description, leftBtnText,
  rightBtnText, Img1, Img2, Img3, projectTitle, projectDesc }) {
  return (
    <Wrap>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <ProjectContainer>
        <ProjectInfo >
          <h1>{projectTitle}</h1>
          <p>{projectDesc}</p>
        </ProjectInfo>
        <SliderContainer>
          <ImgSlider
            FirstImg={Img1}
            SecondImg={Img2}
            ThirdImg={Img3}
          />
        </SliderContainer>
      </ProjectContainer>
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
  background-color: rgba(50, 50, 80, 0.8);
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
  `;

const RightButton = styled(LeftButton)`
  background-color: rgba(100, 50, 100, 0.8);
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
  border: 2px solid green;
  display: flex;
  justify-content: space-around;
  margin: 0px 60px;
  height: 50vh;
  width: 100vw;
  `;

const SliderContainer = styled.div`
  border: 2px solid red;
  max-width: 50%;
  object-fit: contain;
  overflow: hidden;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;

  `;

const ProjectInfo = styled.div`
  border: 2px solid blue;
  max-width: 400px;
  color: white;

  `;
