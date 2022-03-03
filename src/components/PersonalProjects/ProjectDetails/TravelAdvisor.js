import React from 'react';
import ta1 from "../../../images/PersonalProjects/TravelAdvisor/one.png";
import ta2 from "../../../images/PersonalProjects/TravelAdvisor/two.png";
import ta3 from "../../../images/PersonalProjects/TravelAdvisor/three.png";
import JavascriptIcon from "../../../images/Icons/javascript-plain.svg";
import ReactIcon from "../../../images/Icons/react-original.svg";
import HTMLIcon from "../../../images/Icons/html5-original.svg";
import CSSIcon from "../../../images/Icons/css3-original.svg";
import GoogleCloud from '../../../images/Icons/google_cloud-icon.svg';
import RapidAPI from '../../../images/Icons/rapidapi-icon.svg';
import AllProjects from './AllProjects';

function TravelAdvisor({ leftBtnText, rightBtnText }) {
  return (
    <AllProjects
      title="Travel Advisor |  "
      leftBtnText={leftBtnText}
      rightBtnText={rightBtnText}
      role="A solo project I had an idea for to practice calling and using different APIs in a single page application. I was also practicing the implementation of CSS using a different method, that is MakeStyles, although I decided to revert back to styledComponents as it seemed cleaner for me."
      problems="I had a few issues with the layout and grid of the app. Working with MaterialUI classes and trying to implement your own style in the end became too difficult. I realized that MUI could be used for mostly quick projects, without thinking about style too much. Being a front end engineer, I could not work with it so well."
      solutions="I changed back to styledComponents where I had full control of the style. This meant losing some of the MUI functionality. For example, I' m still working on bringing the hovered card to the front, something that MUI was doing automatically for me.Not a huge deal, but something I want to add back."
      img1={ta1}
      img2={ta2}
      img3={ta3}
      icon1={JavascriptIcon}
      icon2={ReactIcon}
      icon3={HTMLIcon}
      icon4={CSSIcon}
      icon5={GoogleCloud}
      icon6={RapidAPI}
    />
  );
}

export default TravelAdvisor;
