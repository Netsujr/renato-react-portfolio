import React from 'react';
import dc1 from "../../../images/PersonalProjects/DisneyClone/one.png";
import dc2 from "../../../images/PersonalProjects/DisneyClone/two.png";
import dc3 from "../../../images/PersonalProjects/DisneyClone/three.png";
import JavascriptIcon from "../../../images/Icons/javascript-plain.svg";
import ReactIcon from "../../../images/Icons/react-original.svg";
import ReduxIcon from "../../../images/Icons/redux-original.svg";
import HTMLIcon from "../../../images/Icons/html5-original.svg";
import CSSIcon from "../../../images/Icons/css3-original.svg";
import FirebaseIcon from "../../../images/Icons/firebase-plain-wordmark.svg";
import AllProjects from './AllProjects';

function DisneyClone({ leftBtnText, rightBtnText }) {
  return (
    <AllProjects
      title="Disney Clone |  "
      leftBtnText={leftBtnText}
      rightBtnText={rightBtnText}
      role="For this project, I wanted to practice my styling of a webpage using React. I also used react-dom but only added links to the 'Home' button and a details page when clicking on a movie."
      problems="I had a few issues during production. Login authentication function wasn't working after deployment. Linking each movie to its respective details page. It was also my first time using Firebase, so naturally I had to get familiar with the platform."
      solutions="I realized a I hadn't updated the re-direct link on firebase for correct authentication. I had to create my own database with respective films as I didn't have access to the Disney db and couldn't find one online. After that, giving each film an ID and linking that to the details page was straightforward."
      img1={dc1}
      img2={dc2}
      img3={dc3}
      icon1={JavascriptIcon}
      icon2={ReactIcon}
      icon3={ReduxIcon}
      icon4={HTMLIcon}
      icon5={CSSIcon}
      icon6={FirebaseIcon}
    />

  );
}

export default DisneyClone;
