import React from 'react';
import styled from 'styled-components';
import GithubIcon from "../../images/Icons/github-original.svg";

const MiniProjectCard = ({ title, siteLink, GhLink, description, cardImg}) => {
  return (
    <CardBody>
      <a href={siteLink} target="blank_" > <h2>Visit Site</h2><img id="image" src={cardImg} alt={title} /></a>
      <a href={GhLink} target="_blank" rel="noreferrer"><img id="icon" src={GithubIcon} alt="Github" /></a>
      <CardTitle>
        <h4>{title}</h4>
      </CardTitle>
      <CardDesc>
        <p>{description}</p>
      </CardDesc>
    </CardBody>
  );
};

export default MiniProjectCard;

const CardBody = styled.div`
  border: 2px solid rgba(83, 83, 83, 0.3);
  max-width: 200px;
  max-height: 295px;
  margin: 20px;
  padding: 10px;
  border-radius: 5px;
  position: relative;
  @media (max-width: 768px) {
    max-height: 100%;
  }

  &:hover {
    border: 2px solid rgba(83, 83, 83, 0.6);
    h2 {
      z-index: 1;
    }
    #image {
      opacity: 0.5;
    }
  }

  h2 {
    position: absolute;
    top: 25%;
    left: 23%;
    color: black;
    font-weight: 900;
    z-index: -1;
    background-color: rgba(250, 250, 250, 0.6);
    padding: 2px 9px;
    border-radius: 15px;
  }


  img {
    width: 175px;
    height: 150px;
    object-fit: cover;
    z-index: 0;
  }

  #image {
    z-index: 0;
  }

  #icon {
    z-index: 0;
    height: 30px;
    width: 30px;
    display: flex;
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 50px;

    &:hover {
      height: 32px;
      width: 32px;
    }
  }

`;

const CardTitle = styled.div`
  margin-bottom: 2px;
  `;

const CardDesc = styled.div`
  p {
    text-align: start;
    padding: 0px 10px;
  }

  `;
