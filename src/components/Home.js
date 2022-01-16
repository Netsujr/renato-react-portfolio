import React from 'react';
import styled from 'styled-components';

function Home() {

  return (
    <Container>
      <ItemText>
        <h1>Coming Soon</h1>
      </ItemText>
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
