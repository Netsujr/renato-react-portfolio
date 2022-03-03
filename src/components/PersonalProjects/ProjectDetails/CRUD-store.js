import React from 'react';
import crud1 from "../../../images/PersonalProjects/CRUD-store/one.png";
import crud2 from "../../../images/PersonalProjects/CRUD-store/two.png";
import crud3 from "../../../images/PersonalProjects/CRUD-store/three.png";
import JavascriptIcon from "../../../images/Icons/javascript-plain.svg";
import ReactIcon from "../../../images/Icons/react-original.svg";
import ReduxIcon from "../../../images/Icons/redux-original.svg";
import HTMLIcon from "../../../images/Icons/html5-original.svg";
import CSSIcon from "../../../images/Icons/css3-original.svg";
import AllProjects from './AllProjects';

function ReduxStore({ leftBtnText, rightBtnText }) {
  return (
    <AllProjects
      title='React & Redux CRUD Store | '
      leftBtnText={leftBtnText}
      rightBtnText={rightBtnText}
      role="For this project, I wanted to practice state CRUD using Reactjs.
    I also used react-dom, APIs, Redux and a few other features.
    I'm in the process of improving the styling in general and refactoring some code to make GET requests a little faster."
      problems="I had a few issues during production. Redux was a little tricky to set up at first. I didn't want to bother with inputs just yet when creating ot editing a product, but it will be implemented in the near future."
      solutions=" Reading up about Redux and everything it brings was a little confusing, but having worked with GlobalContext before, I realized they are similar. I just wanted to use Redux in a non-complicated way, which I did. I will be building on the Actions and Reducers as I learn more about them."
      img1={crud1}
      img2={crud2}
      img3={crud3}
      icon1={JavascriptIcon}
      icon2={ReactIcon}
      icon3={ReduxIcon}
      icon4={HTMLIcon}
      icon5={CSSIcon}
    />
  );
}

export default ReduxStore;
