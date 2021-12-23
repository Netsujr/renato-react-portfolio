import React from 'react';
import styled from 'styled-components';
// import HerokuIcon from "../images/Icons/heroku-original-wordmark.svg";


function Section({ leftBtnText, rightBtnText }) {
  return (
    <Wrap>
      <ItemText>
        <h1>About Me</h1>
        {/* <p>{description}</p> */}
      </ItemText>
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
  min-width: 100vw;
  min-height: 100vh;
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
  padding-top: 15vh;
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

// const DownArrow = styled.img`
//   height: 40px;
//   margin-bottom: 20px;
//   overflow-x: hidden;
//   animation: animateDown infinite 1.5s;
//   `;

const Buttons = styled.div`

  `;
