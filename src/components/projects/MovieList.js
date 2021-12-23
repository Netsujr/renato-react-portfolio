import React from 'react';
import styled from 'styled-components';
import ImgSlider from '../ImgSlider';
import Fade from 'react-reveal/Fade';
import ml1 from "../../images/MovieList/one.png";
import ml2 from "../../images/MovieList/two.png";
import ml3 from "../../images/MovieList/three.png";
import HTMLIcon from "../../images/Icons/html5-original.svg";
import RubyIcon from "../../images/Icons/ruby-original-wordmark.svg";
import RailsIcon from "../../images/Icons/rails-plain-wordmark.svg";
import CSSIcon from "../../images/Icons/css3-original.svg";

function Section({ leftBtnText, rightBtnText }) {
  return (
    <Wrap>
      <Fade top>
        <ItemText>
          <h1>Movie List |  </h1>
            <Icons src={HTMLIcon} />
            <Icons src={RubyIcon} />
            <Icons src={RailsIcon} />
            <Icons src={CSSIcon} />
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
          <ImgSlider
            FirstImg={ml1}
            SecondImg={ml2}
            ThirdImg={ml3}
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
}
`;

// sc for const shortcut
const ItemText = styled.div`
/* border: 2px solid orange; */
width: 100vw;
padding-top: 12vh;
justify-content: center;
text-align: center;
color: white;
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
`;


const Buttons = styled.div`
/* border: 2px solid green; */
width: 100vw;
display: flex;
justify-content: center;
background: rgba(13, 24, 33, 0.9);
@media (max-width : 768px) {
  max-width: 100%;
  margin-top: 20px;
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
  max-width: 100%;
  display: flex;
  margin-bottom: 100px;
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
