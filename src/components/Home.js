import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import renato from '../images/renatobg.png';

function Home() {

  return (
    <Container>
      <ItemText>
        <h1>Renato Delboni || Web Developer</h1>
      </ItemText>
      <InfoContainer>
        <Fade left>
          <ImgContainer>
            <img src={renato} alt="" />
          </ImgContainer>
        </Fade>
        <Fade center
        config={{ delay: 2000, duration: 29000 }}>
          <DetailsContainer>
            <h1>Hello</h1>
          </DetailsContainer>
        </Fade>
      </InfoContainer>
    </Container >
  );
}

export default Home;

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid orange;
  object-fit: contain;
  `;

const InfoContainer = styled.div`
  display: flex;
  `

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
const ImgContainer = styled.div`
  border: 2px solid pink;
  width: 35vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  object-fit: contain;

  img {
    height: 100vh;
    position: absolute;
    bottom: 0px;
    left: 0px;

  }
  `;

const DetailsContainer = styled.div`
  border: 2px solid blue;
  width: 75vw;
  height: 100vh;
  padding: 10px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  `;
