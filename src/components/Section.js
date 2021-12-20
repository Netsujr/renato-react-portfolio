import React from 'react';
import styled from 'styled-components';

function Section() {
  return (
    <Wrap>
      <ItemText>
        <h1>Model S</h1>
        <p>Order Online For Touchless Delivery</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>
            Visit Site
          </LeftButton>
          <RightButton>
            Visit Github Repository
          </RightButton>
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  /* background-color: yellow; */
  background-image: url("/images/model-s.jpg");
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

  `;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 40px;
  cursor: pointer;
  `;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
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

  `;

const RightButton = styled(LeftButton)`

  `;

const DownArrow = styled.img`
  height: 40px;
  margin-bottom: 20px;
  `;

const Buttons = styled.div`

  `;
