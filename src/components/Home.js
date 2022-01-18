import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import renato from '../images/renatobg.png';

function Home() {

  return (
    <Container>
      <ItemText>
        <h1>Coming Soon</h1>
      </ItemText>
      <Fade left>
        <ImgContainer>
          <img src={renato} alt="" />
        </ImgContainer>
      </Fade>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  width: 100vw;

  `;


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
/* border: 2px solid black; */
width: 35vw;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 30px;

img {
  border-radius: 20px;
  box-shadow: 2px 2px 10px 1px;
  margin-bottom: 40px;
}
`;
