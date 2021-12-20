import React from 'react';
import styled from 'styled-components';

function Section() {
  return (
    <Wrap>
      section
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
width: 100vw;
height: 100vh;
/* background-color: yellow; */
background-image: url("../images/gym.png");
background-size: cover;
background-position: center;
background-repeat: no-repeat;

`
