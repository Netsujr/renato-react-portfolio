import React from 'react';
import styled from 'styled-components';
import GithubIcon from "../../images/Icons/github-original.svg";
import WebsiteIcon from "../../images/Icons/website.png";

const ProjectCard = ({ title, description, siteLink, GhLink, path, image }) => {
  return (
    <CardBody>
      <img id="image" src={image} alt="redux store" />
      <a href={siteLink} target="blank_" ><img id='website' src={WebsiteIcon} alt={title} /></a>
      <a href={GhLink} target="_blank" rel="noreferrer"><img id='icon' src={GithubIcon} alt="Github" /></a>
      <a href={`/projects/${path}`} id="link"><span>Learn More </span>{'→'}</a>
      <CardInfoContainer>
        <CardTitle>
          <h2>{title}</h2>
        </CardTitle>
        <CardDesc>
          <p>{description}</p>
        </CardDesc>
      </CardInfoContainer>
    </CardBody>
  );
};

export default ProjectCard;

const CardBody = styled.div`
  border: 2px solid rgba(83, 83, 83, 0.3);
  /* border: solid 1px red; */
  min-width: 75vw;
  min-height: 100%;
  margin: 20px;
  padding: 10px;
  border-radius: 5px;
  position: relative;
  display: flex;
  justify-content: space-between;
  @media (max-width : 768px) {
    flex-direction: column;
    display: flex;
    align-items: center;
    max-height: 100%;
  }

  &:hover {
    #icon, #link, #website {
      opacity: 1;
    }
    border: 2px solid rgba(83, 83, 83, 0.6);
  }

  &:hover {
    background-color: rgba(204, 243, 255, 0.2);
  }

  img {
    width: 250px;
    height: 150px;
    object-fit: cover;
    display: flex;
    align-items: flex-start;
    margin-right: 20px;
    z-index: 0;
    @media (max-width : 768px) {
      width: 200px;
      height: 100px;
      margin-right: 0;
    }
  }

  #icon {
    z-index: 1;
    height: 25px;
    width: 25px;
    display: flex;
    position: absolute;
    top: 10px;
    left: 300px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 50px;
    transition: all .3s;
    opacity: 0;
    @media (max-width : 768px) {
      opacity: 1;
      top: 3px;
      left: 5px;

    }

    &:hover {
      height: 27px;
      width: 27px;
    }
  }

  #website {
    z-index: 1;
    height: 25px;
    width: 25px;
    display: flex;
    position: absolute;
    top: 10px;
    left: 270px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 50px;
    opacity: 0;
    transition: all .3s;
    @media (max-width : 768px) {
      opacity: 1;
      top: 40px;
      left: 5px;
    }

    &:hover {
      height: 27px;
      width: 27px;
    }
  }

  #link {
    z-index: 1;
    padding: .75rem .75rem;
    border-radius: 10rem;
    color: black;
    text-transform: uppercase;
    font-size: 0.5rem;
    letter-spacing: .15rem;
    transition: all .3s;
    overflow: hidden;
    background-color: #A9E1FF;
    position: absolute;
    right: 5px;
    top: 10px;
    opacity: 0;
    @media (max-width : 768px) {
      opacity: 1;
      width: fit-content;
      padding: 0px 5px;
      font-size: 15px;
      span {
        display: none;
      }
    }

    &:hover {
      background-color: black;
      color: #ffffff;
    }
  }
  `;

const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  `;

const CardTitle = styled.div`
  margin-bottom: 2px;
  `;

const CardDesc = styled.div`

  p {
    text-align: start;
    padding: 0px 10px;
    font-size: 16px !important;
    margin-top: 10px;
    @media (max-width : 768px) {
      font-size: 12px !important;
    }
  }

  `;
