import styled from 'styled-components';
import React from 'react';

const Panel = ({ title, link, word, backgroundImage, extraWord }) => {
  return (
    <PanelContainer backgroundImage={backgroundImage}>
      <PanelBody>
        <p>{extraWord}</p>
        <p>{title}</p>
        <p><a href={link}>{word}</a></p>
      </PanelBody>
    </PanelContainer>
  );
};

export default Panel;

const PanelContainer = styled.div`
  background: #f0d5ff;
  background-image: url(${props => props.backgroundImage});
  box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.1);
  color: white;
  text-align: center;
  align-items: center;
  transition: font-size 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11),
  flex 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11), background 0.2s;
  font-size: 12px;
  background-size: cover;
  background-position: center;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;

  `

const PanelBody = styled.div`
  border: 2px solid blue;

  * {
  margin: 0;
  max-width: 100%;
  transition: transform 0.5s;
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  text-transform: uppercase;
  font-family: monospace;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.82), 0 0 14px rgba(0, 0, 0, 0.85);
  font-size: 30px;
  color: white;
}

p a {
  background: rgba(0, 0, 0, 0.22);
  border-radius: 5px;
  padding: 10px;
  font-size: 24px !important;
  color: white;
  font-family: monospace;
}
`
